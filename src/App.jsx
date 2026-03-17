import { useState, useRef, useEffect } from 'react'
import { nodes, edges, NODE_W, NODE_H, SVG_W, SVG_H } from './familyData'
import './App.css'

const POINTS = [3, 2, 1] // indexed by hintLevel 0, 1, 2
const MAX_SCORE = nodes.length * POINTS[0]

function load(key) {
  try { return JSON.parse(localStorage.getItem(key)) || {} } catch { return {} }
}

function getNodeById(id) {
  return nodes.find(n => n.id === id)
}

function checkGuess(node, guess) {
  const normalized = guess.toLowerCase().trim()
  return normalized.length > 0 && node.accepts.some(a => a === normalized)
}

function EdgePath({ edge }) {
  const from = getNodeById(edge.from)
  const to = getNodeById(edge.to)
  if (!from || !to) return null

  const x1 = from.x
  const y1 = from.y + NODE_H / 2
  const x2 = to.x
  const y2 = to.y - NODE_H / 2
  const midY = (y1 + y2) / 2
  const pathD = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`

  return (
    <path
      d={pathD}
      fill="none"
      stroke={edge.skipped ? '#554433' : '#7a5c2e'}
      strokeWidth={edge.skipped ? 1.5 : 2}
      strokeDasharray={edge.skipped ? '8 5' : undefined}
    />
  )
}

function NodeBox({ node, solved, pointsEarned, flash, onClick }) {
  return (
    <g
      transform={`translate(${node.x - NODE_W / 2}, ${node.y - NODE_H / 2})`}
      onClick={() => onClick(node)}
      style={{ cursor: 'pointer' }}
      role="button"
      aria-label={solved ? `Review: ${node.name}` : 'Click to guess'}
    >
      <rect
        width={NODE_W}
        height={NODE_H}
        rx={7}
        ry={7}
        className={`node-rect ${solved ? 'solved' : 'unsolved'} ${flash ? 'flash' : ''}`}
      />
      {solved ? (
        <>
          <text x={NODE_W / 2} y={NODE_H / 2 + 2} textAnchor="middle" className="node-name">
            {node.name}
          </text>
          {pointsEarned != null && (
            <text x={NODE_W / 2} y={NODE_H / 2 + 16} textAnchor="middle" className="node-points">
              {'★'.repeat(pointsEarned)}
            </text>
          )}
        </>
      ) : (
        <text x={NODE_W / 2} y={NODE_H / 2 + 7} textAnchor="middle" className="node-question">
          ?
        </text>
      )}
    </g>
  )
}

export default function App() {
  const [solved, setSolved]           = useState(() => load('tg_solved'))
  const [earned, setEarned]           = useState(() => load('tg_earned'))
  const [hintLevels, setHintLevels]   = useState(() => load('tg_hints'))   // nodeId → 0|1|2
  const [wrongCounts, setWrongCounts] = useState(() => load('tg_wrongs'))  // nodeId → number
  const [flashing, setFlashing]       = useState({})
  const [activeNode, setActiveNode]   = useState(null)
  const [guess, setGuess]             = useState('')
  const [wrong, setWrong]             = useState(false)
  const inputRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])
  useEffect(() => { localStorage.setItem('tg_solved',  JSON.stringify(solved))      }, [solved])
  useEffect(() => { localStorage.setItem('tg_earned',  JSON.stringify(earned))      }, [earned])
  useEffect(() => { localStorage.setItem('tg_hints',   JSON.stringify(hintLevels))  }, [hintLevels])
  useEffect(() => { localStorage.setItem('tg_wrongs',  JSON.stringify(wrongCounts)) }, [wrongCounts])

  useEffect(() => {
    if (activeNode && inputRef.current) inputRef.current.focus()
  }, [activeNode])

  const nodeHintLevel  = activeNode ? (hintLevels[activeNode.id]  || 0) : 0
  const nodeWrongCount = activeNode ? (wrongCounts[activeNode.id] || 0) : 0
  const pendingPoints  = activeNode ? Math.max(0, POINTS[nodeHintLevel] - nodeWrongCount) : null

  function handleNodeClick(node) {
    setActiveNode(node)
    setGuess('')
    setWrong(false)
  }

  function handleRevealHint() {
    const next = Math.min((hintLevels[activeNode.id] || 0) + 1, 2)
    setHintLevels(h => ({ ...h, [activeNode.id]: next }))
    inputRef.current?.focus()
  }

  function handleGuessSubmit(e) {
    e.preventDefault()
    if (!activeNode) return

    if (checkGuess(activeNode, guess)) {
      const pts = Math.max(0, POINTS[nodeHintLevel] - nodeWrongCount)
      setSolved(s => ({ ...s, [activeNode.id]: true }))
      setEarned(e => ({ ...e, [activeNode.id]: pts }))
      setFlashing(f => ({ ...f, [activeNode.id]: true }))
      setTimeout(() => setFlashing(f => ({ ...f, [activeNode.id]: false })), 600)
      setActiveNode(null)
      setGuess('')
      setWrong(false)
    } else {
      setWrongCounts(c => ({ ...c, [activeNode.id]: (c[activeNode.id] || 0) + 1 }))
      setWrong(true)
      inputRef.current?.select()
    }
  }

  function handleRevealAnswer() {
    setSolved(s => ({ ...s, [activeNode.id]: true }))
    setEarned(e => ({ ...e, [activeNode.id]: 0 }))
    setFlashing(f => ({ ...f, [activeNode.id]: true }))
    setTimeout(() => setFlashing(f => ({ ...f, [activeNode.id]: false })), 600)
    setActiveNode(null)
    setGuess('')
    setWrong(false)
  }

  function handleClose() {
    setActiveNode(null)
    setGuess('')
    setWrong(false)
  }

  function handleReset() {
    ['tg_solved', 'tg_earned', 'tg_hints', 'tg_wrongs'].forEach(k => localStorage.removeItem(k))
    setSolved({})
    setEarned({})
    setHintLevels({})
    setWrongCounts({})
    setFlashing({})
    setActiveNode(null)
    setGuess('')
    setWrong(false)
  }

  const solvedCount = Object.values(solved).filter(Boolean).length
  const totalCount  = nodes.length
  const score       = Object.values(earned).reduce((a, b) => a + b, 0)
  const allSolved   = solvedCount === totalCount

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-left">
            <h1>House Targaryen</h1>
            <p className="subtitle">Family Tree Quiz &mdash; A Song of Ice and Fire</p>
          </div>
          <div className="header-right">
            <div className="stat-group">
              <span className="stat-label">Identified</span>
              <span className="stat-value">{solvedCount} / {totalCount}</span>
              <div className="progress-wrap">
                <div
                  className="progress-bar"
                  style={{ width: `${(solvedCount / totalCount) * 100}%` }}
                />
              </div>
            </div>
            <div className="stat-group">
              <span className="stat-label">Score</span>
              <span className="stat-value score-value">{score} / {MAX_SCORE}</span>
            </div>
            <button className="btn-reset" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </header>

      {allSolved && (
        <div className="victory-banner">
          Fire and Blood — You have named them all! &nbsp;{score} / {MAX_SCORE} pts
        </div>
      )}

      <div className="tree-container">
        <svg width={SVG_W} height={SVG_H} className="tree-svg">
          {edges.map((edge, i) => (
            <EdgePath key={i} edge={edge} />
          ))}

          <text x={590} y={870} textAnchor="middle" className="skip-label">
            &#x2015; via Aegon IV &#x2015;
          </text>

          {nodes.map(node => (
            <NodeBox
              key={node.id}
              node={node}
              solved={!!solved[node.id]}
              pointsEarned={earned[node.id]}
              flash={!!flashing[node.id]}
              onClick={handleNodeClick}
            />
          ))}
        </svg>
      </div>

      {activeNode && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleClose}>&#x2715;</button>

            {solved[activeNode.id] ? (
              /* ── Review mode ── */
              <div className="review-body">
                <div className="review-name">{activeNode.name}</div>
                <div className="hint-epithet">{activeNode.shortHint}</div>
                <div className="hint-full">{activeNode.hint}</div>
                {earned[activeNode.id] != null && (
                  <div className="review-score">
                    {'★'.repeat(earned[activeNode.id])}{'☆'.repeat(POINTS[0] - earned[activeNode.id])}
                    <span className="points-label">{earned[activeNode.id]} pt{earned[activeNode.id] !== 1 ? 's' : ''} earned</span>
                  </div>
                )}
              </div>
            ) : (
              /* ── Guess mode ── */
              <>
                <div className="hint-area">
                  {nodeHintLevel === 0 && (
                    <button className="btn-hint" onClick={handleRevealHint}>
                      Show Hint &nbsp;<span className="hint-cost">−1 pt</span>
                    </button>
                  )}
                  {nodeHintLevel >= 1 && (
                    <div className="hint-epithet">{activeNode.shortHint}</div>
                  )}
                  {nodeHintLevel === 1 && (
                    <button className="btn-hint btn-hint-secondary" onClick={handleRevealHint}>
                      Show Full Clue &nbsp;<span className="hint-cost">−1 pt</span>
                    </button>
                  )}
                  {nodeHintLevel >= 2 && (
                    <div className="hint-full">{activeNode.hint}</div>
                  )}
                </div>

                <div className="points-indicator">
                  {'★'.repeat(pendingPoints)}{'☆'.repeat(POINTS[0] - pendingPoints)}
                  <span className="points-label">{pendingPoints} pt{pendingPoints !== 1 ? 's' : ''} for correct answer</span>
                </div>

                <form onSubmit={handleGuessSubmit}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={guess}
                    onChange={e => { setGuess(e.target.value); setWrong(false) }}
                    placeholder="Enter name…"
                    className={`guess-input ${wrong ? 'wrong' : ''}`}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <div className="modal-buttons">
                    <button type="submit" className="btn-submit">Guess</button>
                    <button type="button" className="btn-cancel" onClick={handleClose}>Skip</button>
                  </div>
                </form>

                {wrong && (
                  <div className="wrong-msg">
                    Not quite — try again! &nbsp;<span className="wrong-penalty">−1 pt</span>
                  </div>
                )}

                {pendingPoints === 0 && (
                  <button className="btn-reveal" onClick={handleRevealAnswer}>
                    Reveal Answer
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

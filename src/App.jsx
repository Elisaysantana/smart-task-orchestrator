const overviewStats = [
  { label: 'Tasks completed', value: '148', delta: '+12%' },
  { label: 'Active sprints', value: '6', delta: '+2' },
  { label: 'Automation rate', value: '81%', delta: '+9%' },
  { label: 'Focus score', value: '92', delta: '+5' }
];

const tasks = [
  { project: 'Website Redesign', owner: 'Alicia', due: 'Today', priority: 'High', status: 'In review' },
  { project: 'Campaign Launch', owner: 'Marcus', due: 'Tomorrow', priority: 'Medium', status: 'Queued' },
  { project: 'QA Regression', owner: 'Priya', due: 'Thu', priority: 'High', status: 'Blocked' },
  { project: 'Customer Onboarding', owner: 'Daniel', due: 'Fri', priority: 'Low', status: 'Ready' }
];

const workload = [
  { name: 'Design', value: 78, color: 'purple' },
  { name: 'Product', value: 62, color: 'cyan' },
  { name: 'Engineering', value: 88, color: 'green' },
  { name: 'Support', value: 46, color: 'amber' }
];

const timeline = [
  'Sprint planning',
  'UX review',
  'Build handoff',
  'Customer validation',
  'Launch readiness'
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-icon">S</div>
          <div>
            <strong>Smart Task</strong>
            <small>Orchestrator</small>
          </div>
        </div>

        <nav className="nav">
          <span className="nav-item active">Dashboard</span>
          <span className="nav-item">Projects</span>
          <span className="nav-item">Automation</span>
          <span className="nav-item">Reports</span>
          <span className="nav-item">Team</span>
        </nav>

        <div className="sidebar-panel">
          <small>Delivery health</small>
          <strong>89%</strong>
          <div className="mini-bar"><span style={{ width: '89%' }} /></div>
          <label>On-track this sprint</label>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Operations Overview</p>
            <h1>Workforce Execution Hub</h1>
          </div>
          <button className="primary-btn">+ New Workflow</button>
        </header>

        <section className="stats-grid">
          {overviewStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <em>{stat.delta}</em>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel-card large">
            <div className="card-head">
              <div>
                <small>Current priorities</small>
                <h3>Task queue</h3>
              </div>
              <span className="tag neutral">Updated 3 min ago</span>
            </div>
            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.project} className="task-row">
                  <div>
                    <strong>{task.project}</strong>
                    <span>{task.owner}</span>
                  </div>
                  <div className="task-meta">
                    <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                    <span className={`status ${task.status.toLowerCase().replace(/\s+/g, '-')}`}>{task.status}</span>
                    <strong>{task.due}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card">
            <div className="card-head">
              <div>
                <small>Capacity</small>
                <h3>Workload mix</h3>
              </div>
            </div>
            <div className="workload-list">
              {workload.map((item) => (
                <div key={item.name} className="load-item">
                  <div className="load-label">
                    <span>{item.name}</span>
                    <strong>{item.value}%</strong>
                  </div>
                  <div className="load-bar">
                    <span className={item.color} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel-card">
            <div className="card-head">
              <div>
                <small>Execution timeline</small>
                <h3>Next milestones</h3>
              </div>
            </div>
            <div className="timeline">
              {timeline.map((step, index) => (
                <div key={step} className="timeline-item">
                  <span className="step-dot">{index + 1}</span>
                  <div>
                    <strong>{step}</strong>
                    <small>{index === 0 ? 'Start of sprint' : index === timeline.length - 1 ? 'Final check' : 'Upcoming milestone'}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card">
            <div className="card-head">
              <div>
                <small>Smart automation</small>
                <h3>Recommended actions</h3>
              </div>
            </div>
            <ul className="suggestion-list">
              <li>Reassign one QA task to unblock launch timeline.</li>
              <li>Auto-prioritize customer onboarding tasks above new requests.</li>
              <li>Deploy a handoff reminder for the marketing sprint board.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="page-title">
        <p className="eyebrow">GitHub Copilot Practice</p>
        <h1 id="page-title">React 연습 프로젝트가 준비되었습니다.</h1>
        <p className="description">
          이제 Copilot과 대화하며 이 화면을 나만의 웹앱으로 바꿔 보세요.
        </p>
        <div className="status" role="status">
          <span aria-hidden="true">✓</span>
          실행 확인 완료
        </div>
      </section>
    </main>
  )
}

export default App


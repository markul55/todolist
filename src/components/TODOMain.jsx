function TODOMain({ todos_completed, total_todos }) {
    return (
      <section className="todohero_section">
        <div>
          <p className="text_large">Zadanie Wykonane</p>
          <p className="text_small">Oby tak dalej</p>
        </div>
        <div>
          {todos_completed}/{total_todos}
        </div>
      </section>
    );
  }
  
  export default TODOMain;
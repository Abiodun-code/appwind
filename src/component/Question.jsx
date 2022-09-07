import React from 'react'
import '../styles/Question.css'
import '../Querys/QuestionQuery.css'

const Question = () => {
  return (
    <div className='Question'>
      <div className="Question_wrap">
        <div className="Question_shift">
          <h1>Frequently Asked Questions</h1>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="Question_card_shift">
          <div className="Question_card">
            <div className="Question1">
              <h1>Which plan is suitable for me?</h1>
              <p>Sed tempor mi at nunc commodo, quis tincidunt turpis finibus. Pellentesque congue neque justo. Will I get free future updates?</p>
            </div>
            <div className="Question1">
              <h1>Will I get free future updates?</h1>
              <p>Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique at sit amet elit.</p>
            </div>
            <div className="Question1">
              <h1>Do you provide support?</h1>
              <p>Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique.</p>
            </div>
          </div>
          <div className="Question_card">
            <div className="Question1">
              <h1>Which plan is suitable for me?</h1>
              <p>Sed tempor mi at nunc commodo, quis tincidunt turpis finibus. Pellentesque congue neque justo. Will I get free future updates?</p>
            </div>
            <div className="Question1">
              <h1>Will I get free future updates?</h1>
              <p>Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique at sit amet elit.</p>
            </div>
            <div className="Question1">
              <h1>Do you provide support?</h1>
              <p>Maecenas tincidunt risus et interdum lobortis. Nunc nec eros mattis diam suscipit tristique.</p>
            </div>
          </div>
        </div>          
      </div>
    </div>
  )
}

export default Question
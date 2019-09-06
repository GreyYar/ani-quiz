import React from 'react';

class ResultScreen extends React.Component {
  static reloadPage() {
    location.reload();
  }

  render() {
    return this.props.visible && (
    <div id="char-info center">
      <div id="result-screen">
        <h2>{"Correct answers: " + this.props.score + "%"}</h2>
      </div>
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3060412c-a2b9-4122-9d08-7b0b432280e5/d475xt0-df1c50ae-101c-472f-9ec7-ec4eaa5cacb9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwNjA0MTJjLWEyYjktNDEyMi05ZDA4LTdiMGI0MzIyODBlNVwvZDQ3NXh0MC1kZjFjNTBhZS0xMDFjLTQ3MmYtOWVjNy1lYzRlYWE1Y2FjYjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BzTILK_fKNktpv67Q5Z4JOrlTt6IcZa6fNFIB6Qk3nI" alt="" />
      <button id="restart-button"
              onClick={ResultScreen.reloadPage}
      >AGAIN ?</button>
    </div>
    )
  }
}

export { ResultScreen }
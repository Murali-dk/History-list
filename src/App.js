import './App.css'
import {Component} from 'react'
import History from './components/History'

// These are the list used in the application. You can move them to any component needed.
const historyList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {initialHistoryList: historyList, searchInput: '', isEmpty: false}

  eventChange = event => {
    const {initialHistoryList, searchInput} = this.state
    const updateEventInput = initialHistoryList.filter(item =>
      item.title.toLowerCase().includes(searchInput),
    )
    this.setState({
      searchInput: event.target.value,
      initialHistoryList: updateEventInput,
    })
  }

  onDelete = id => {
    const {initialHistoryList, isEmpty} = this.state
    const updateHistory = initialHistoryList.filter(item => item.id !== id)
    this.setState({initialHistoryList: updateHistory})
    if (initialHistoryList.length === 0){
      isEmpty = true
    }
  }

  render() {
    const {initialHistoryList, searchInput, isEmpty} = this.state
    if (initialHistoryList.length === 0) {
      return <h1>There is no history to show</h1>
    }
    return (
      <div className="bg-cont">
        <div className="top-nav">
          <img
            className="history-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
          />
          <div className="input-cont">
            <img
              className="search"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
            />
            <hr />
            <input
              onChange={this.eventChange}
              className="input"
              type="search"
              placeholder="Search history"
              value={searchInput}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="bottm-cont">
            <ul>
              {initialHistoryList.map(eachItem => (
                <History
                  key={eachItem.id}
                  listOfHistory={eachItem}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
            {isEmpty && (
              <div>
              <h1>There is no History to show</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App

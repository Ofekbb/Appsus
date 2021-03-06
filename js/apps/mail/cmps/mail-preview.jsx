import { GetDateFormat } from './mail-preview/sentAt-preview.jsx';
import { mailService } from '../services/mail.service.js';

const { Link } = ReactRouterDOM;

export class MailPreview extends React.Component {
  state = {
    isOpen: false,
  };
  componentDidMount() {}
  
  onMailOpen = () => {
    const mail = this.props.mail;
    if (!mail.isRead && !this.state.isOpen) {
      this.props.onMarkMailRead(mail);
      mail.isRead = true;
    }
    this.setState({ isOpen: !this.state.isOpen });
  };
  
  onStarred = () =>{
    const mail = this.props.mail;
    this.props.onToggleStarred(mail.id)
    this.state.isOpen = !this.state.isOpen
  }

  render() {
    const mail = this.props.mail;
    const isOpen = this.state.isOpen;
    if (!mail) return <h1>loading..</h1>;
    const senderName = this.props.mail.from.slice(0, mail.from.indexOf('@'));
    const classRead = mail.isRead ? '' : 'unread';
    const starImg = mail.isStarred ? 'star' : 'star-outline';
    return (
      <section className="mail-container">
        <section
          className={`mail-preview ${classRead}`}
          onClick={() => this.onMailOpen()}
        >
          <div className="star">
          <img onClick={this.onStarred} src={`imgs/app/mail/${starImg}.png`}/>
          </div>
          <h2 className='user-sender'>{senderName}</h2>
          <div className="subject-body">
            <h2>{mail.subject} - </h2>
            <span>{mail.body}</span>
          </div>
          <GetDateFormat sentAt={mail.sentAt} />
        </section>
        {isOpen && (
          <section className="mail-details">
            <h1>{mail.subject}</h1>
            <h2>
              {senderName} {mail.from}
            </h2>
            <p>{mail.body}</p>
            {!mail.isRead && (
              <img
                onClick={() => this.props.onToggleReadUnread(mail)}
                className="close-mail"
                src="imgs/app/mail/close-mail.png"
                alt=""
              />
            )}
            {mail.isRead && (
              <img
                onClick={() => this.props.onToggleReadUnread(mail)}
                className="open-mail"
                src="imgs/app/mail/open-mail.png"
                alt=""
              />
            )}
            <Link to={`/mail/${mail.id}`}>
              <img
                className="full-screen"
                src="imgs/app/mail/expand.png"
                alt=""
              />
            </Link>
            <Link to={`/notes/${mail.id}`}>
              <img
                onClick={this.onSendToKeep}
                className="keep-transfer"
                src="imgs/app/mail/sticky-note.png"
                alt=""
              />
            </Link>
            <svg
              onClick={() => this.props.onDeleteMail(mail)}
              className="trash-icon"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
            </svg>
          </section>
        )}
        <section className="tools-bar-hover">
          {!mail.isRead && (
            <div className="img-container">
              <img
                onClick={() => this.props.onToggleReadUnread(mail)}
                className="close-mail"
                src="imgs/app/mail/close-mail.png"
                alt=""
              />
            </div>
          )}
          {mail.isRead && (
            <div className="img-container">
              <img
                onClick={() => this.props.onToggleReadUnread(mail)}
                className="open-mail"
                src="imgs/app/mail/open-mail.png"
                alt=""
              />
            </div>
          )}
          <Link to={`/mail/${mail.id}`}>
            <div className="img-container">
              <img
                className="full-screen"
                src="imgs/app/mail/expand.png"
                alt=""
              />
            </div>
          </Link>
          <Link to={`/notes/${mail.id}`}>
            <div className="img-container">
              <img
                onClick={this.onSendToKeep}
                className="keep-transfer"
                src="imgs/app/mail/sticky-note.png"
                alt=""
              />
            </div>
          </Link>
          <div className="img-container">
            <svg
              onClick={() => this.props.onDeleteMail(mail)}
              className="trash-icon"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
            </svg>
          </div>
        </section>
      </section>
    );
  }
}

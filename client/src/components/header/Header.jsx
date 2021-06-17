import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span  className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?cs=srgb&dl=pexels-dom-j-310452.jpg&fm=jpg" alt=""/>
        </div>
    )
}

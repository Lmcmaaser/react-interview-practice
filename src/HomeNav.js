import React from 'react'
import {Link} from 'react-router-dom'

class HomeNav extends React.Component {
    render() {
        return(
            <div>
                <nav>
                        <ul>
                            <li>
                                <Link to="/hello">HelloWorld</Link>
                            </li>
                            <li>
                                <Link to="/hello/user">HelloUser</Link>
                            </li>
                            <li>
                                <Link to="/hello2/counter">Counter</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        )
    }
}

export default HomeNav;
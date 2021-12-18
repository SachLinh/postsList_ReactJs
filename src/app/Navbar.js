import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = ()=>
{
    return (
        <nav>
            <section>
                <h1>Chào mừng bạn đến với web của Linh</h1>
                <div>
                    <div className="navContent">
                        <Link to="/">Posts</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}
import React from "react";

function Footer() {
    return (
        <div className="bg-secondary bg-opacity-10" >
            <div className="footerBottom d-flex justify-content-center text-muted ">
                <p className="pt-3">&copy;prankshadow</p>
            </div>
            <div className="socialIcon text-center pb-4 fa-2x">
                <a href="https://github.com/prankshadow">
                <i class="fa-brands fa-github p-2"></i>
                </a>
                <a href="https://instagram.com/padmeshjakhmola">
                <i class="fa-brands fa-instagram p-2"></i>
                </a>
                <a href="https://github.com/padmeshjakhmola">
                <i class="fa-brands fa-facebook p-2"></i>
                </a>
                <a href="https://github.com/padmeshjakhmola">
                <i class="fa-brands fa-linkedin p-2"></i>
                </a>
            </div>
        </div>

    );
}

export default Footer;

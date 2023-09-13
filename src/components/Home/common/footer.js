import React from "react";

function AppFooter() {
return(
     <div className="container-fluid">
        <div className="footer">
            <div className="custom-font non-copyable">
                <h2 style={{ marginTop: '20px',fontSize: '40px' }}>Alluvium</h2>
            </div>
            <ul className="socials">
                <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.pinterest.com/"><i class="fab fa-pinterest-p"></i></a></li>
            </ul>
            <div className = "copyright">Copyright &copy; 2023 Tech</div>
        </div>
    </div>
    );
}

export default AppFooter;
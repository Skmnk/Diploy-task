import React from "react";
import './styles/Footer.css'
import logo from './images/logo-full.svg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Printify" className="footer-logo-img"/>
            </div>
            <div className="footer-socials">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-reddit"></i></a>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Integrations</h4>
                    <ul className="footer-ul">
                        <li className="footer-li">Shopify</li>
                        <li className="footer-li">Etsy</li>
                        <li className="footer-li">eBay</li>
                        <li className="footer-li">Amazon</li>
                        <li className="footer-li">TikTok Shop</li>
                        <li className="footer-li">PrestaShop</li>
                        <li className="footer-li">BigCommerce</li>
                        <li className="footer-li">Wix</li>
                        <li className="footer-li">Wix</li>
                        <li className="footer-li">WooCommerce</li>
                        <li className="footer-li">Squarespace</li>
                        <li className="footer-li">Printify API</li>
                        <li className="footer-li">Printify Pop-Up Store</li>
                        <li className="footer-li">Shutterstock</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Discover</h4>
                    <ul className="footer-ul">
                        <li className="footer-li">Blog</li>
                        <li className="footer-li">Guides</li>
                        <li className="footer-li">Products</li>
                        <li className="footer-li">Etsy print-on-demand</li>
                        <li className="footer-li">Shopify print-on-demand</li>
                        <li className="footer-li">WooCommerce print-on-demand</li>
                        <li className="footer-li">Wix print-on-demand</li>
                        <li className="footer-li">Squarespace print-on-demand</li>
                        <li className="footer-li">Make Your Own Shirt</li>
                        <li className="footer-li">Brands</li>
                        <li className="footer-li">Pricing</li>
                        <li className="footer-li">Shipping Rates</li>
                        <li className="footer-li">Mockup Generator</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Start Selling</h4>
                    <ul className="footer-ul">
                        <li className="footer-li">Custom T-shirts</li>
                        <li className="footer-li">Custom Hoodies</li>
                        <li className="footer-li">Custom Mugs</li>
                        <li className="footer-li">Custom Socks</li>
                        <li className="footer-li">Custom Backpacks</li>
                        <li className="footer-li">Custom Branding</li>
                        <li className="footer-li">Sell on Etsy</li>
                        <li className="footer-li">Sell on Social Media</li>
                        <li className="footer-li">Free T-shirt Designs</li>
                        <li className="footer-li">Custom Products</li>
                        <li className="footer-li">Custom All-Over-Print Hoodies</li>
                        <li className="footer-li">Start a Clothing Line</li>
                        <li className="footer-li">Start POD Business</li>
                        <li className="footer-li">Bulk Orders</li>
                        <li className="footer-li">Transferring to Printify</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Printify</h4>
                    <ul className="footer-ul">
                        <li className="footer-li">Print on Demand</li>
                        <li className="footer-li">Print Providers</li>
                        <li className="footer-li">Experts Program</li>
                        <li className="footer-li" >Printify Express Delivery</li>
                        <li className="footer-li">Become a Partner</li>
                        <li className="footer-li">About</li>
                        <li className="footer-li">Printify Quality Promise</li>
                        <li className="footer-li">Jobs</li>
                        <li className="footer-li">Webinars</li>
                        <li className="footer-li">Printing Profits Podcast</li>
                        <li className="footer-li">Contact Us</li>
                        <li className="footer-li">Affiliate</li>
                        <li className="footer-li">Contact Sales</li>
                        <li className="footer-li">POD Glossary</li>
                        <li className="footer-li">Network Fulfillment Status</li>
                        <li className="footer-li">Merchant Protection</li>
                        <li className="footer-li">Security</li>
                        <li className="footer-li">Sitemap</li>
                    </ul>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
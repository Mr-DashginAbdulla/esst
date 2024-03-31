

import { Link } from "react-router-dom";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

const settings = ["Profile", "Account", "Dashboard"];

export const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleProfileClick = () => {
        // Profil seçeneğine tıklandığında login sayfasına yönlendirme işlemi
        window.location.href = "/login";
    };

    return (
        <section className="header">
            <div className="upHead">
                <Link to="/">esst-6</Link>
                <div className="profile">
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    {setting === "Profile" ? (
                                        <Typography onClick={handleProfileClick} textAlign="center">
                                            {setting}
                                        </Typography>
                                    ) : (
                                        <Typography textAlign="center">{setting}</Typography>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </div>
            </div>
            <div className="navHead">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleMobileMenuToggle}
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                {mobileMenuOpen && (
                    <div className="mobileMenu">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact-us">Contact Us</Link>
                    </div>
                )}
                <div className="desktopMenu">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
        </section>
    );
};

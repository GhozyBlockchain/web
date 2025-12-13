import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const DocsSidebar = ({ navigation, isOpen, onClose }) => {
    const { slug } = useParams();
    const activeSlug = slug || 'introduction'; // Default to introduction

    return (
        <>
            <div
                className={`docs-sidebar-backdrop ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />
            <>
                <div
                    className={`docs-sidebar-backdrop ${isOpen ? 'open' : ''}`}
                    onClick={onClose}
                />
                <aside className={`docs-sidebar ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-header">
                        <h3>Documentation</h3>
                        <button onClick={onClose} className="close-btn">&times;</button>
                    </div>

                    <nav className="docs-nav">
                        {navigation.map((section, idx) => (
                            <div key={idx} className="nav-section">
                                <div className="nav-section-title">
                                    {section.icon}
                                    <span>{section.title}</span>
                                </div>
                                <ul className="nav-list">
                                    {section.items.map((item) => {
                                        const isActive = activeSlug === item.slug;
                                        return (
                                            <li key={item.slug}>
                                                <Link
                                                    to={`/docs/${item.slug}`}
                                                    className={`nav-item ${isActive ? 'active' : ''}`}
                                                    onClick={onClose}
                                                >
                                                    {item.title}
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="active-indicator"
                                                            className="active-indicator"
                                                        />
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>
            </>
        </>
    );
};

export default DocsSidebar;

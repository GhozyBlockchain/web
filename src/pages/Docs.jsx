import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import DocsSidebar from '../components/Docs/DocsSidebar';
import { docsNavigation, docsContent } from '../data/docs';
import './Docs.css';

const Docs = () => {
    const { slug } = useParams();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Default to introduction if no slug
    const activeSlug = slug || 'introduction';
    const contentData = docsContent[activeSlug];

    useEffect(() => {
        // Scroll to top when slug changes
        window.scrollTo(0, 0);
    }, [activeSlug]);

    if (!contentData) {
        return <Navigate to="/docs/introduction" replace />;
    }

    return (
        <div className="container docs-layout">
            <DocsSidebar
                navigation={docsNavigation}
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <main className="docs-content">
                <article className="docs-article">
                    <h1>{contentData.title}</h1>
                    <div className="docs-body">
                        {contentData.content}
                    </div>
                </article>
            </main>

            <button
                className="docs-menu-toggle"
                onClick={() => setSidebarOpen(true)}
            >
                <Menu />
            </button>
        </div>
    );
};

export default Docs;

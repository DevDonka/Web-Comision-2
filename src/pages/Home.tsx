import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, FolderGit, Monitor, Code, Smartphone, Zap, Shield, Youtube, Instagram, DollarSign, ArrowUp } from "lucide-react";

const DiscordSVG = () => (
    <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const XTwitterSVG = () => (
    <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function Home() {
    const stats = [
        {
            icon: Users,
            value: "1.2M+",
            label: "Game Visits",
        },
        {
            icon: FolderGit,
            value: "12+",
            label: "Projects Completed",
        },
    ];

    const services = [
        {
            icon: Monitor,
            title: "Game Development",
            description: "Complete game development from concept to deployment, including mechanics, UI, and optimization.",
        },
        {
            icon: Code,
            title: "Lua Scripting",
            description: "Advanced Lua scripting for complex game mechanics, data persistence, and server-side logic.",
        },
        {
            icon: Smartphone,
            title: "UI/UX Design",
            description: "Intuitive and beautiful user interfaces that enhance player experience and engagement.",
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Expert optimization techniques to ensure smooth gameplay and fast loading times.",
        },
        {
            icon: Shield,
            title: "Security & Anti-Exploit",
            description: "Robust security measures and anti-exploit systems to protect your game and players.",
        },
    ];
    
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <section className="pt-32 pb-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center space-y-8 animate-slide-up">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="text-foreground">Professional </span>
                                <span className="text-primary">Roblox</span>
                                <br />
                                <span className="text-foreground">Development</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                Abot me I am an 18-year-old programmer who has been on the platform for 3 years
                                <br />
                                with experience in multiple projects.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Button variant="gradient" size="lg" asChild>
                                    <a href="/vouches">Vouches →</a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/works">View My Work</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="p-4 bg-primary/10 rounded-lg">
                                            <stat.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                                            {stat.value}
                                        </h3>
                                        <p className="text-muted-foreground text-lg">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                What I <span className="text-primary">Offer</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Comprehensive Roblox development services tailored to bring your vision to life
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-card/50 to-card border border-border/50 rounded-2xl p-8 hover:border-primary/60 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:scale-105 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    
                                    <div className="relative space-y-5">
                                        <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl w-fit group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-primary/50">
                                            <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="prices" className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                                My <span className="text-primary">Prices</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Details on payment methods, rates, and policies for commissions.
                            </p>
                        </div>

                        <div className="bg-card border border-primary/50 rounded-2xl p-8 shadow-xl shadow-primary/10 space-y-6">
                            <p className="text-lg text-foreground font-semibold border-b border-border/70 pb-4">
                                I accept dollars (via PayPal) and Robux at the DeveX rate. To be paid 50% upfront, 50% after.
                            </p>
                            
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold text-primary">Pricing Structure:</h3>
                                <p className="text-foreground italic">
                                    My prices depend on the complexity of the task:
                                </p>
                                <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                                    <li>PayPal (Dollars): $10 - $200 (Depends on the task / tasks).</li>
                                    <li>Robux: 2,500+ (ignoring tax).</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className="py-20 px-4 text-center">
                    <div className="container mx-auto max-w-6xl">
                        <Button variant="gradient" size="lg" asChild>
                            <Link to="/" onClick={scrollToTop}>
                                <span className="flex items-center justify-center gap-2">
                                    <ArrowUp className="w-5 h-5" />
                                    Home Return
                                </span>
                            </Link>
                        </Button>
                    </div>
                </section>
            </main>
            
            <footer className="bg-gray-900 py-6 px-4 border-t border-border/40">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        
                        <a
                            href="https://discord.gg/pgH289tzJM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                            aria-label="Discord"
                        >
                            <DiscordSVG />
                        </a>

                        <a
                            href="https://x.com/Cadles6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                            aria-label="X (Twitter)"
                        >
                            <XTwitterSVG />
                        </a>
                        
                        <a
                            href="https://www.youtube.com/@cadles161"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </a>
                        
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2.5 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </a>

                    </div>

                    <div className="text-gray-400 text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                        <span className="whitespace-nowrap">
                            © {currentYear} All Rights Reserved.
                        </span>
                        <span className="hidden sm:inline"> — </span> 
                        <a href="/terms" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                            Terms of Service
                        </a>
                        <span className="hidden sm:inline"> — </span>
                        <a href="/privacy" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
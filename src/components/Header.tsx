import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesDropdown from "./ServicesDropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";
import supabase from "../helper/supabaseClient";
import { useToast } from "@/hooks/use-toast";
import Adrig_Logo from "../assets/Adrig_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { toast } = useToast();

  // Check auth state on mount
  useEffect(() => {
    setLoading(true);

    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Toggle scrolled state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openLoginDialog = () => setLoginDialogOpen(true);
  const openSignupDialog = () => setSignupDialogOpen(true);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({ title: "Signed out successfully" });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <header
        className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-white">ADRIG</span>
              <span className="font-bold text-xl text-white ml-1">AI</span>
            </Link>
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 py-2 border-b border-white border-opacity-30 ${isScrolled ? 'bg-white shadow-sm' : 'bg-[#135bfb]'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center w-full">
            {/* Logo on left */}
            <div className="flex items-center flex-1 min-w-0">
              <Link to="/" className="flex items-center flex-shrink-0">
                <img
                  src={isScrolled ? Adrig_Logo : "/uploads/Adrig - white logo - 2.PNG"}
                  alt="ADRIG Logo"
                  className={`w-auto mr-2 ${isScrolled ? 'h-12' : 'h-7'}`}
                  width={56}
                  height={56}
                  loading="eager"
                  style={{ minWidth: 40 }}
                />
                <div className="flex flex-col leading-tight">
                  <div className="flex items-end">
                    <span className={`font-bold text-sm ${isScrolled ? 'text-[#135bfb]' : 'text-white'}`}>ADRIG</span>
                    <span className={`font-bold text-sm ml-1 ${isScrolled ? 'text-[#135bfb]' : 'text-white'}`}>AI</span>
                  </div>
                  <span className={`text-[8px] tracking-[0.25em] font-medium uppercase ${isScrolled ? 'text-[#135bfb]' : 'text-white'}`}>Technologies</span>
                </div>
              </Link>
            </div>

            {/* Centered Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <Link
                to="/service"
                className={`transition-colors ${
                  isScrolled ? 'text-[#135bfb] hover:text-blue-700' : 'text-white hover:text-white/80'} ${
                  location.pathname === "/service" ? (isScrolled ? 'font-semibold underline underline-offset-4 text-[#135bfb]' : 'font-semibold underline underline-offset-4 text-white') : ''
                }`}
              >
                Service
              </Link>
              <Link
                to="/product"
                className={`transition-colors ${
                  isScrolled ? 'text-[#135bfb] hover:text-blue-700' : 'text-white hover:text-white/80'} ${
                  location.pathname === "/product" ? (isScrolled ? 'font-semibold underline underline-offset-4 text-[#135bfb]' : 'font-semibold underline underline-offset-4 text-white') : ''
                }`}
              >
                Product
              </Link>
              <Link
                to="/work"
                className={`transition-colors ${
                  isScrolled ? 'text-[#135bfb] hover:text-blue-700' : 'text-white hover:text-white/80'} ${
                  location.pathname === "/work" ? (isScrolled ? 'font-semibold underline underline-offset-4 text-[#135bfb]' : 'font-semibold underline underline-offset-4 text-white') : ''
                }`}
              >
                Work
              </Link>
              <Link
                to="/plan"
                className={`transition-colors ${
                  isScrolled ? 'text-[#135bfb] hover:text-blue-700' : 'text-white hover:text-white/80'} ${
                  location.pathname === "/plan" ? (isScrolled ? 'font-semibold underline underline-offset-4 text-[#135bfb]' : 'font-semibold underline underline-offset-4 text-white') : ''
                }`}
              >
                Plan
              </Link>
              <Link
                to="/team"
                className={`transition-colors ${
                  isScrolled ? 'text-[#135bfb] hover:text-blue-700' : 'text-white hover:text-white/80'} ${
                  location.pathname === "/team" ? (isScrolled ? 'font-semibold underline underline-offset-4 text-[#135bfb]' : 'font-semibold underline underline-offset-4 text-white') : ''
                }`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isScrolled ? 'text-[#135bfb] hover:text-blue-700' : 'text-white hover:text-white/80'} ${
                  location.pathname === "/contact" ? (isScrolled ? 'font-semibold underline underline-offset-4 text-[#135bfb]' : 'font-semibold underline underline-offset-4 text-white') : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Auth buttons on right */}
            <div className="flex items-center justify-end flex-1 space-x-3">
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="flex items-center text-sm">
                    <User size={16} className="mr-1" />
                    {user.user_metadata?.name || user.email?.split("@")[0]}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={handleSignOut}
                  >
                    <LogOut size={16} />
                  </Button>
                </div>
              ) : (
                <>
                  {isScrolled ? (
                    <>
                      <Button
                        variant="outline"
                        className="bg-white border border-[#135bfb] text-[#135bfb] hover:bg-blue-100 hover:text-[#135bfb]"
                        onClick={openLoginDialog}
                      >
                        Login
                      </Button>
                      <Button
                        variant="default"
                        className="bg-[#135bfb] text-white border border-[#135bfb] hover:bg-blue-700 hover:text-white font-semibold"
                        onClick={openSignupDialog}
                      >
                        Sign Up
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="bg-[#135bfb] border border-white text-white hover:bg-blue-700 hover:text-white"
                        onClick={openLoginDialog}
                      >
                        Login
                      </Button>
                      <Button
                        variant="default"
                        className="bg-white text-[#135bfb] hover:bg-blue-100 hover:text-[#135bfb] border border-white font-semibold"
                        onClick={openSignupDialog}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="flex items-center">
            <img src={Adrig_Logo} alt="ADRIG Logo" className="h-14 w-auto" />
            <div className="flex flex-col leading-tight -ml-1">
              <div className="flex items-end">
                <span className="font-bold text-sm text-[#135bfb]">ADRIG</span>
                <span className="font-bold text-sm ml-1 text-[#135bfb]">AI</span>
              </div>
              <span className="text-[8px] tracking-[0.25em] font-medium uppercase text-[#135bfb]">
                Technologies
              </span>
            </div>
          </Link>
          <button onClick={toggleMenu}>
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-6">
          <Link to="/service" className="text-xl text-gray-700 hover:text-[#135bfb]">
            Service
          </Link>
          <Link to="/product" className="text-xl text-gray-700 hover:text-[#135bfb]">
            Product
          </Link>
          <Link to="/work" className="text-xl text-gray-700 hover:text-[#135bfb]">
            Work
          </Link>
          <Link to="/plan" className="text-xl text-gray-700 hover:text-[#135bfb]">
            Plan
          </Link>
          <Link to="/team" className="text-xl text-gray-700 hover:text-[#135bfb]">
            Team
          </Link>
          <Link to="/contact" className="text-xl text-gray-700 hover:text-[#135bfb]">
            Contact
          </Link>
        </nav>
      </div>

      <LoginDialog
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
        onSwitchToSignup={() => {
          setLoginDialogOpen(false);
          setSignupDialogOpen(true);
        }}
      />
      <SignupDialog
        open={signupDialogOpen}
        onOpenChange={setSignupDialogOpen}
        onSwitchToLogin={() => {
          setSignupDialogOpen(false);
          setLoginDialogOpen(true);
        }}
      />
    </>
  );
};

export default Header;

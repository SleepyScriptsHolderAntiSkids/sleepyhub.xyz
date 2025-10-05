import { Shield, Lock, Zap, Users, CheckCircle, MessageSquare, HelpCircle } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white tracking-tight">SleepyHub</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Testimonials</a>
              <a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">FAQ</a>
            </div>
            <a href="https://sleepyhub-ez.sellhub.cx/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg shadow-blue-500/30">
                Purchase Now
              </button>
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-semibold tracking-wide">Over 4,000+ Protected Servers</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Advanced Anti-Cheat<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Protection</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            SleepyHub provides enterprise-grade anti-cheat detection with real-time monitoring and automated response systems.
          </p>
          <a href="https://sleepyhub-ez.sellhub.cx/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60">
              Get Started
            </button>
          </a>
          <div className="mt-20 bg-slate-800/50 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-slate-700/50 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Security Dashboard Interface"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Features</h2>
            <p className="text-2xl text-slate-300 font-semibold mb-3">Why Choose SleepyHub?</p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Our solution offers unmatched detection capabilities with continuous monitoring and automated threat response.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all transform hover:-translate-y-1 group">
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Detection</h3>
              <p className="text-slate-400 leading-relaxed">Multi-layered detection algorithms that identify and block exploit attempts in real-time.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all transform hover:-translate-y-1 group">
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Monitoring</h3>
              <p className="text-slate-400 leading-relaxed">Continuous surveillance with instant alerts and automated response protocols.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all transform hover:-translate-y-1 group">
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <MessageSquare className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-slate-400 leading-relaxed">Dedicated support team available around the clock to assist with any security concerns.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all transform hover:-translate-y-1 group">
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Regular Updates</h3>
              <p className="text-slate-400 leading-relaxed">Frequent updates to stay ahead of emerging threats and new exploit methods.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h2>
            <p className="text-2xl text-slate-300 font-semibold mb-3">What Server Administrators Say</p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Join over 4,000 protected servers that trust SleepyHub for their security needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/10 p-3 rounded-xl">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-bold text-lg">jarjardki</p>
                  <p className="text-slate-400 text-sm">7 months ago</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">"Since implementing SleepyHub, we've seen a 95% reduction in exploit attempts. The automated detection is incredibly accurate."</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/10 p-3 rounded-xl">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-bold text-lg">9xig</p>
                  <p className="text-slate-400 text-sm">8 months ago</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">"The real-time monitoring dashboard gives us complete visibility. Best anti-cheat solution we've used."</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500/10 p-3 rounded-xl">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-bold text-lg">blatantfebruary</p>
                  <p className="text-slate-400 text-sm">7 months ago</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">"Support team is exceptional. They helped us configure custom rules for our specific security requirements."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing</h2>
            <p className="text-2xl text-slate-300 font-semibold mb-3">Simple, Transparent Pricing</p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Choose the protection tier that fits your server size and security needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Basic Protection</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">$5</span>
                <span className="text-slate-400 text-lg">/mo</span>
              </div>
              <p className="text-slate-400 mb-8 text-lg">For Small Servers</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Core detection features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Regular security updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Discord support access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Basic monitoring dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Up to 3 server instances</span>
                </li>
              </ul>
              <a href="https://sleepyhub-ez.sellhub.cx/product/ThaBronx3/" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl transition-all font-semibold text-lg">
                  Get Started
                </button>
              </a>
            </div>

            <div className="bg-gradient-to-b from-blue-500/20 to-slate-800/50 backdrop-blur rounded-2xl p-8 border-2 border-blue-500 relative transform md:scale-105 shadow-2xl shadow-blue-500/20 flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pro Protection</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">$10</span>
                <span className="text-slate-400 text-lg">/mo</span>
              </div>
              <p className="text-slate-400 mb-8 text-lg">For Medium Servers</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Advanced detection algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Priority security updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Priority support access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Unlimited server instances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Advanced analytics dashboard</span>
                </li>
              </ul>
              <a href="https://sleepyhub-ez.sellhub.cx/product/StreetzWar2/" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl transition-all font-bold text-lg shadow-lg shadow-blue-500/30">
                  Get Started
                </button>
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise</h3>
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">$15</span>
                <span className="text-slate-400 text-lg">/mo</span>
              </div>
              <p className="text-slate-400 mb-8 text-lg">For Large Networks</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Enterprise-grade protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Instant security patches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Dedicated support channel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Unlimited server instances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-base">Custom rule configuration</span>
                </li>
              </ul>
              <a href="https://sleepyhub-ez.sellhub.cx/product/south-bronx/" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl transition-all font-semibold text-lg">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">FAQ</h2>
            <p className="text-2xl text-slate-300 font-semibold mb-3">Frequently Asked Questions</p>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Find answers to common questions about SleepyHub anti-cheat protection.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Is SleepyHub safe to use?",
                answer: "Yes, SleepyHub is completely safe and operates with read-only detection protocols that don't interfere with legitimate gameplay or server operations."
              },
              {
                question: "How often do you update detection algorithms?",
                answer: "We release security updates weekly and critical patches within 24 hours of identifying new exploit methods."
              },
              {
                question: "Can I use SleepyHub on multiple servers?",
                answer: "Yes, our Pro and Enterprise tiers support unlimited server instances under a single license."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and cryptocurrency payments for your convenience."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our protection services."
              },
              {
                question: "How do I get support if I have issues?",
                answer: "Our support team is available 24/7 via Discord, email, and our dedicated support portal. Enterprise customers receive a dedicated support channel."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-slate-700/30 transition-colors group"
                >
                  <span className="text-white font-bold text-lg pr-4 group-hover:text-blue-400 transition-colors">{faq.question}</span>
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-all flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-slate-300 text-base leading-relaxed border-t border-slate-700/50">
                    <div className="pt-6">{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Protect Your Server?</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10">Join over 4,000 protected servers</p>
          <a href="https://sleepyhub-ez.sellhub.cx/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl shadow-blue-500/40">
              Get SleepyHub Now
            </button>
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-700/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-9 h-9 text-blue-400" />
              <span className="text-2xl font-bold text-white">SleepyHub</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#features" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Testimonials</a>
              <a href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">Pricing</a>
              <a href="#faq" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">FAQ</a>
            </div>
          </div>
          <div className="mt-12 text-center text-slate-400 text-base">
            © 2025 SleepyHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

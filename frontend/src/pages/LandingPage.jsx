// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button"; // FIXED PATH
// import { Heart, Users, Trophy, TrendingUp } from "lucide-react";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const features = [
//     {
//       id: "users",
//       icon: <Users className="w-8 h-8" />,
//       title: "Subscribe & Select",
//       description:
//         "Choose your plan and select a charity that matters to you. Minimum 10% of subscriptions go directly to your chosen cause.",
//     },
//     {
//       id: "trophy",
//       icon: <Trophy className="w-8 h-8" />,
//       title: "Track Your Scores",
//       description:
//         "Log your latest 5 golf scores. Each score enters you into monthly draws with tiered prizes based on matches.",
//     },
//     {
//       id: "trending",
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Win & Give Back",
//       description:
//         "Match 3, 4, or all 5 numbers to win prizes from the community pool. Jackpot rolls over when unclaimed.",
//     },
//   ];

//   const pricing = [
//     {
//       id: "monthly",
//       plan: "Monthly",
//       price: "19.99",
//       period: "month",
//       features: [
//         "Monthly draw entries",
//         "Track up to 5 scores",
//         "Support your charity",
//         "Win up to $5,000",
//         "Cancel anytime",
//       ],
//     },
//     {
//       id: "annual",
//       plan: "Annual",
//       price: "199.99",
//       period: "year",
//       popular: true,
//       features: [
//         "Save 20% annually",
//         "12 months of draws",
//         "Track up to 5 scores",
//         "Support your charity",
//         "Win up to $5,000",
//         "Priority support",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <header className="glass fixed top-0 w-full z-50">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-light tracking-tight">
//             The Golf Give
//           </h1>

//           <div className="flex gap-4">
//             <Button
//               variant="ghost"
//               onClick={() => navigate("/login")}
//               className="rounded-full"
//             >
//               Login
//             </Button>

//             <Button
//               onClick={() => navigate("/register")}
//               className="rounded-full bg-primary hover:bg-primary/90"
//             >
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative pt-32 pb-20 px-6">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-12 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="md:col-span-6"
//             >
//               <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
//                 Play · Give · Win
//               </p>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
//                 Where Every Round Makes a Difference
//               </h1>

//               <p className="text-lg text-muted-foreground mb-8 max-w-lg">
//                 Join a community of golfers who play for purpose. Track your
//                 scores, support charities, and win monthly prizes.
//               </p>

//               <div className="flex gap-4">
//                 <Button
//                   size="lg"
//                   onClick={() => navigate("/register")}
//                   className="rounded-full bg-primary hover:bg-[#153425]"
//                 >
//                   Start Your Journey
//                 </Button>

//                 <Button
//                   size="lg"
//                   variant="outline"
//                   onClick={() => navigate("/charities")}
//                   className="rounded-full border-border hover:bg-secondary"
//                 >
//                   Explore Charities
//                 </Button>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="md:col-span-6"
//             >
//               <img
//                 src="https://static.prod-images.emergentagent.com/jobs/325e6561-a995-4c04-9317-af06f0a05e53/images/dc58db4510381349445d36439248ad8587db0577f47d7f597309bcb0d6ea791b.png"
//                 alt="Golf landscape"
//                 className="rounded-xl shadow-lg w-full"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20 px-6 bg-secondary/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl text-center mb-16">
//             How It Works
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature) => (
//               <motion.div
//                 key={feature.id}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 className="bg-card p-8 rounded-xl border border-border"
//               >
//                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
//                   {feature.icon}
//                 </div>

//                 <h3 className="text-xl mb-3">
//                   {feature.title}
//                 </h3>

//                 <p className="text-muted-foreground">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="py-20 px-6">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className="text-3xl text-center mb-16">
//             Pricing
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {pricing.map((tier) => (
//               <div
//                 key={tier.id}
//                 className={`p-8 rounded-xl border ${
//                   tier.popular ? "border-accent shadow-lg" : "border-border"
//                 }`}
//               >
//                 <h3 className="text-xl mb-2">{tier.plan}</h3>

//                 <div className="mb-6">
//                   <span className="text-4xl">${tier.price}</span>
//                   <span className="text-muted-foreground">
//                     /{tier.period}
//                   </span>
//                 </div>

//                 <ul className="mb-8 space-y-2">
//                   {tier.features.map((f, i) => (
//                     <li key={i} className="flex gap-2">
//                       <Heart className="w-4 h-4 text-accent" />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   className="w-full"
//                   onClick={() => navigate("/register")}
//                 >
//                   Choose {tier.plan}
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#1A1D1B] text-white py-12 text-center">
//         <h2 className="text-2xl mb-2">The Golf Give</h2>
//         <p className="opacity-70 text-sm">
//           © 2026 The Golf Give
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart, Users, Trophy, TrendingUp, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: "users",
      icon: Users,
      title: "Subscribe & Select",
      description: "Choose your plan and select a charity that matters to you. Minimum 10% of subscriptions go directly to your chosen cause.",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: "trophy",
      icon: Trophy,
      title: "Track Your Scores",
      description: "Log your latest 5 golf scores. Each score enters you into monthly draws with tiered prizes based on matches.",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "trending",
      icon: TrendingUp,
      title: "Win & Give Back",
      description: "Match 3, 4, or all 5 numbers to win prizes from the community pool. Jackpot rolls over when unclaimed.",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const pricing = [
    {
      id: "monthly",
      plan: "Monthly",
      price: "19.99",
      period: "month",
      features: [
        "Monthly draw entries",
        "Track up to 5 scores", 
        "Support your charity",
        "Win up to $5,000",
        "Cancel anytime"
      ],
    },
    {
      id: "annual",
      plan: "Annual",
      price: "199.99",
      period: "year",
      popular: true,
      features: [
        "Save 20% annually",
        "12 months of draws",
        "Track up to 5 scores",
        "Support your charity", 
        "Win up to $5,000",
        "Priority support"
      ],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Golf Give
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
                className="text-slate-700 hover:text-slate-900 font-medium rounded-xl h-11 px-6 hover:bg-slate-100 transition-all duration-200"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl h-11 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-green-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-8 max-w-max">
                <Heart className="w-4 h-4 mr-2" />
                Play Golf. Give Back. Win Big.
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent leading-tight mb-6">
                Every Round
                <br />
                <span className="text-emerald-600">Makes a Difference</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Join thousands of golfers who turn their passion into purpose. 
                Track scores, support charities you love, and win monthly prizes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/register")}
                  className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-7 px-12 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  Start Playing Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/charities")}
                  className="border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 font-bold py-7 px-12 rounded-2xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Explore Charities
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm border border-emerald-200/30">
                <img
                  src="https://static.prod-images.emergentagent.com/jobs/325e6561-a995-4c04-9317-af06f0a05e53/images/dc58db4510381349445d36439248ad8587db0577f47d7f597309bcb0d6ea791b.png"
                  alt="Golfers playing on scenic course with charity impact visualization"
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-slate-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6"
            >
              Simple. Powerful. Impactful.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Three steps to turn your golf game into real-world impact
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-slate-200/50 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-white border-opacity-70">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-9 h-9 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ChevronRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-slate-900 mb-6"
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Flexible plans designed for every golfer. Cancel anytime.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-10 lg:p-12 border-4 transition-all duration-500 hover:shadow-2xl ${
                  tier.popular 
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-2xl scale-105" 
                    : "border-slate-200 bg-white shadow-xl hover:border-slate-300"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-2xl font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-2">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4">
                    {tier.plan}
                  </h3>
                  <div className="inline-flex items-baseline">
                    <span className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                      ${tier.price}
                    </span>
                    <span className="text-xl text-slate-500 ml-2">/{tier.period}</span>
                  </div>
                  {tier.popular && (
                    <p className="text-emerald-600 font-semibold mt-2">Save 20%</p>
                  )}
                </div>

                <ul className="space-y-4 mb-12">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-left">
                      <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          tier.popular 
                            ? 'bg-emerald-500' 
                            : 'bg-slate-300 group-hover:bg-emerald-500 transition-colors'
                        }`}>
                          <Heart className={`w-3 h-3 text-white ${tier.popular ? '' : 'group-hover:scale-110 transition-transform'}`} />
                        </div>
                      </div>
                      <span className="text-lg text-slate-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  onClick={() => navigate("/register")}
                  className={`w-full h-14 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 ${
                    tier.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/50 hover:shadow-emerald-500/75 hover:-translate-y-0.5'
                      : 'bg-white border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:shadow-slate-500/25 hover:-translate-y-0.5'
                  }`}
                >
                  Choose {tier.plan} Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Ready to Make Every Round Count?
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the movement. Play golf. Give back. Win big. Your next great round 
              starts something amazing.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate("/register")}
              className="bg-white text-slate-900 font-bold py-8 px-16 rounded-3xl text-xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </motion.div>
          
          <div className="mt-20 pt-12 border-t border-slate-800">
            <h3 className="text-2xl font-bold mb-4">The Golf Give</h3>
            <p className="text-slate-400 text-lg">© 2026 Golf Give. Play with purpose.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
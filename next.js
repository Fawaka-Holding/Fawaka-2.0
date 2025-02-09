import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4"
      >
        The Future is Coming. Are You Ready?
      </motion.h1>
      <p className="text-gray-400 text-lg text-center mb-6">
        Fawaka.xyz is launching soon. Be among the first to access the next revolution in digital assets.
      </p>
      <Link href="#" passHref>
        <Button className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600">
          Join the Waitlist
        </Button>
      </Link>

      {/* Tokenomics Section */}
      <Card className="bg-gray-900 p-6 mt-10 w-full max-w-md">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">Tokenomics</h2>
          <p className="text-gray-400">Total Supply: 100,000,000 Tokens</p>
          <p className="text-gray-400">Dev Holdings: 6%</p>
          <p className="text-gray-400">Community Incentives: 50%</p>
          <p className="text-gray-400">Liquidity & Reserves: 30%</p>
          <p className="text-gray-400">Governance & Utility: 14%</p>
        </CardContent>
      </Card>

      {/* Social Links */}
      <div className="flex gap-4 mt-10">
        <Link href="https://t.me/fawaka_xyz">
          <Button className="bg-blue-500 px-4 py-2 rounded-lg">Join Telegram</Button>
        </Link>
        <Link href="https://x.com/fawaka_xyz">
          <Button className="bg-gray-700 px-4 py-2 rounded-lg">Follow on X</Button>
        </Link>
      </div>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import TanstackQueryProvider from "@/components/providers/tanstack";

export default function Home() {
  return (
    <TanstackQueryProvider>
      <Homepage />
    </TanstackQueryProvider>
  );
}

function Homepage(){

  return (
    <motion.div>

    </motion.div>
  )
}
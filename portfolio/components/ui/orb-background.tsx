import { motion, MotionValue } from "framer-motion";

export default function OrbBackground({ y }: { y: MotionValue<string> }) {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-teal-900/20 light:from-purple-100/30 light:via-blue-100/30 light:to-teal-100/30" />
      <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] light:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_50%)]" />
      </motion.div>
    </div>
  );
}

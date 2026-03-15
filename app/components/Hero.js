'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 50% 60%, rgba(245,200,66,0.07) 0%, #000 70%)',
    }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      {/* Glowing orb */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(245,200,66,0.1)',
          border: '1px solid rgba(245,200,66,0.3)',
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '32px',
          fontSize: '13px',
          color: 'var(--accent)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
        <span style={{
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)',
          display: 'inline-block',
          animation: 'pulse 2s infinite',
        }} />
        Ag Tech Innovation 2026
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: 'clamp(48px, 9vw, 120px)',
          fontWeight: '700',
          letterSpacing: '-0.03em',
          lineHeight: '1.0',
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 24px',
          background: 'linear-gradient(180deg, #f5f5f7 0%, #6e6e73 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        Canola<br />
        <span style={{
          background: 'linear-gradient(135deg, #f5c842, #f5a623)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Sense.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          maxWidth: '600px',
          padding: '0 24px',
          marginTop: '24px',
          lineHeight: '1.5',
          fontWeight: '300',
        }}>
        Autonomous crop disease detection for Saskatchewan's canola farmers.
        Catch it early. Save your harvest.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '48px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '0 24px',
        }}>
        <a href="#how-it-works" style={{
          background: 'var(--accent)',
          color: '#000',
          padding: '14px 32px',
          borderRadius: '100px',
          fontWeight: '600',
          fontSize: '16px',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
          See How It Works
        </a>
        <a href="#specs" style={{
          background: 'transparent',
          color: 'var(--text-primary)',
          padding: '14px 32px',
          borderRadius: '100px',
          fontWeight: '500',
          fontSize: '16px',
          textDecoration: 'none',
          border: '1px solid var(--border)',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => e.target.style.borderColor = 'rgba(245,200,66,0.5)'}
          onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}>
          View Specs
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-tertiary)',
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--text-tertiary), transparent)',
          }} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
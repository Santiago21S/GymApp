import { StyleSheet } from 'react-native';

// IRON THEME — Monochrome
// Background:   #0A0A0A  (void black)
// Surface:      #111111  (carbon)
// Border:       #222222  (dark steel)
// Text primary: #F2F2F2  (cold white)
// Text mid:     #666666  (ash grey)
// Text muted:   #333333  (deep grey)
// Accent:       #FFFFFF  (pure white — sparingly)

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
  },
  formContainer: {
    paddingHorizontal: 28,
  },

  // ── Logo / header ────────────────────────────────────────
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    gap: 10,
  },
  logoAccent: {
    width: 5,
    height: 36,
    backgroundColor: '#F2F2F2',
    borderRadius: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#F2F2F2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: '#383838',
    textAlign: 'center',
    marginBottom: 44,
  },

  // ── Form fields ──────────────────────────────────────────
  label: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#555555',
    marginBottom: 8,
    marginLeft: 2,
  },
  input: {
    height: 54,
    borderColor: '#222222',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 18,
    backgroundColor: '#111111',
    color: '#F2F2F2',
    fontSize: 15,
    fontWeight: '500',
  },

  // ── Primary CTA ──────────────────────────────────────────
  primaryButton: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 17,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#0A0A0A',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },

  // ── Secondary link ───────────────────────────────────────
  secondaryButton: {
    marginTop: 24,
    alignItems: 'center',
    paddingVertical: 4,
  },
  secondaryText: {
    color: '#444444',
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  secondaryTextAccent: {
    color: '#C0C0C0',
    fontWeight: '700',
  },

  // ── Divider ──────────────────────────────────────────────
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#1A1A1A',
  },
  dividerText: {
    color: '#2E2E2E',
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  // ── Switch row ───────────────────────────────────────────
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: '#1E1E1E',
    borderRadius: 5,
    backgroundColor: '#111111',
  },
  switchLabel: {
    fontSize: 12,
    color: '#555555',
    fontWeight: '500',
    letterSpacing: 0.3,
    flex: 1,
  },
  switchLabelActive: {
    color: '#BBBBBB',
  },
});
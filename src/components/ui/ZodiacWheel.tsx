export default function ZodiacWheel({ className = '' }: { className?: string }) {
  const signs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
  const r = 120;
  const inner = 80;

  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="150" cy="150" r="145" fill="none" stroke="rgba(203,170,104,0.25)" strokeWidth="1" />
      <circle cx="150" cy="150" r={r + 30} fill="none" stroke="rgba(203,170,104,0.15)" strokeWidth="0.5" />
      <circle cx="150" cy="150" r={r} fill="none" stroke="rgba(203,170,104,0.2)" strokeWidth="0.5" />
      <circle cx="150" cy="150" r={inner} fill="none" stroke="rgba(203,170,104,0.15)" strokeWidth="0.5" />

      {/* Dividing lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 150 + inner * Math.cos(angle);
        const y1 = 150 + inner * Math.sin(angle);
        const x2 = 150 + 145 * Math.cos(angle);
        const y2 = 150 + 145 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(203,170,104,0.2)"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Sign symbols */}
      {signs.map((s, i) => {
        const angle = (i * 30 - 75) * (Math.PI / 180);
        const symR = (r + inner) / 2 + 8;
        const x = 150 + symR * Math.cos(angle);
        const y = 150 + symR * Math.sin(angle);
        return (
          <text
            key={i}
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="13"
            fill="rgba(203,170,104,0.7)"
          >
            {s}
          </text>
        );
      })}

      {/* Center star */}
      <text
        x="150" y="150"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="22"
        fill="rgba(203,170,104,0.5)"
      >
        ✦
      </text>
    </svg>
  );
}

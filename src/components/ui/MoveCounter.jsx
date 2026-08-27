import { useMemo, useState } from "react";
import clsx from "clsx";
import { analyzeSolution } from "../../utils/moveCounter.js";
import styles from "./MoveCounter.module.css";

const PLACEHOLDER = `R U R2 (F' L F)\n// 6`;

export function MoveCounter() {
  const [value, setValue] = useState("");
  const result = useMemo(() => analyzeSolution(value), [value]);
  const hasInput = value.trim().length > 0;

  return (
    <div className={styles.wrap}>
      <textarea
        className={styles.input}
        placeholder={PLACEHOLDER}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        spellCheck={false}
      />

      {hasInput && (
        <>
          <div className={styles.tokens}>
            {result.tokens.map((t, i) => (
              <span
                key={i}
                className={clsx(
                  styles.token,
                  t.type === "rotation" && styles.tokenRotation,
                  t.type === "invalid" && styles.tokenInvalid,
                  t.niss && t.type !== "invalid" && styles.tokenNiss
                )}
                title={
                  t.type === "rotation"
                    ? "Ротація — не рахується"
                    : t.type === "invalid"
                    ? "Нерозпізнаний хід"
                    : t.niss
                    ? "NISS-хід"
                    : undefined
                }
              >
                {t.raw}
              </span>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.total}>
              <span className={styles.totalNumber}>{result.total}</span>
              <span className={styles.totalLabel}>ходів усього</span>
            </div>
            <dl className={styles.breakdown}>
              <div>
                <dt>Звичайна частина</dt>
                <dd>{result.normalMoves}</dd>
              </div>
              <div>
                <dt>NISS-частина</dt>
                <dd>{result.nissMoves}</dd>
              </div>
              <div>
                <dt>Ротації (не рахуються)</dt>
                <dd>{result.rotations}</dd>
              </div>
            </dl>
          </div>

          {result.errors.length > 0 && (
            <ul className={clsx(styles.messages, styles.errors)}>
              {result.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          )}

          {result.warnings.length > 0 && (
            <ul className={clsx(styles.messages, styles.warnings)}>
              {result.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

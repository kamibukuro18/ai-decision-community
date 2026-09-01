/**
 * Design reminder — Salon After Hours:
 * Quiet Systems: use asymmetric editorial rhythm, electric-blue signal lines and restrained motion
 * to make executive dialogue feel precise, secure, and human.
 */
import { ArrowDownRight, ArrowUpRight, Check, CircleDotDashed, CornerDownRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "うまくいかなかったことを、先に話せる。",
    body: "導入の失敗、社内の戸惑い、判断を保留している理由。整えきれていない実験記録こそ、次の意思決定を豊かにします。",
  },
  {
    number: "02",
    title: "結論より、問いの解像度を上げる。",
    body: "誰かの成功パターンをなぞるのではなく、自社にとって何を試し、どこで止まるべきかを、複数の視点で見直します。",
  },
  {
    number: "03",
    title: "持ち帰るのは、次の一手だけ。",
    body: "議論を正解探しにしない。今日の対話から、自分の組織で確かめる小さな実験を一つ選びます。",
  },
];

const moments = [
  { time: "01 / BRING", label: "問いを持ち込む", text: "いま、決めきれずにいること。" },
  { time: "02 / OPEN", label: "経験をひらく", text: "他社の試行錯誤に、耳を澄ます。" },
  { time: "03 / DECIDE", label: "次の一手を選ぶ", text: "自社に戻って確かめることを定める。" },
];

export default function Home() {
  return (
    <main className="site-shell overflow-hidden bg-[#111719] text-[#F6F0E5]">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="共同体 トップへ">
          <img src="/manus-storage/kyodotai-blue-mark_1073ec8c.png" alt="共同体のロゴマーク" />
          <span className="brand-type">
            <strong>共同体</strong>
            <small>CO-DECIDE</small>
          </span>
        </a>
        <a className="nav-cta" href="#membership">
          <span>参加について</span>
          <ArrowDownRight size={16} strokeWidth={1.8} />
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-visual" aria-hidden="true">
          <img src="/manus-storage/kyodotai-blue-hero_b02fcf1a.png" alt="" />
          <div className="hero-wash" />
          <div className="hero-grain" />
        </div>
        <div className="hero-layout">
          <div className="hero-index animate-reveal">
            <span>EST. FOR THE UNDECIDED</span>
            <i />
            <span>01 — 26</span>
          </div>
          <div className="hero-copy animate-reveal delay-1">
            <p className="eyebrow"><span /> PRIVATE PEER COMMUNITY</p>
            <h1>正解のない<br /><em>AI戦略を、</em><br />ひとりで悩まない。</h1>
            <div className="hero-bottom">
              <p>経営者同士が本音で実験し、<br className="hidden sm:block" />意思決定の質を高め合う場所。</p>
              <a className="circle-link" href="#about" aria-label="共同体について読む">
                <ArrowDownRight size={25} strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-footnote animate-reveal delay-2">
          <span>SCROLL TO ENTER</span>
          <span className="line" />
          <span>静かな対話から、次の一手へ。</span>
        </div>
      </section>

      <section id="about" className="manifesto-section">
        <div className="section-rail"><span>01</span><i /></div>
        <div className="manifesto-grid">
          <p className="section-kicker">WHY WE GATHER</p>
          <div>
            <p className="manifesto-lead">社内では、<br />「AIを使いこなしている人」で<br />いなければならない。</p>
            <div className="manifesto-body">
              <p>けれど経営の現場には、まだ答えのない問いが残ります。投資対効果は見えるのか。現場はついてこられるのか。そもそも、何から試せばいいのか。</p>
              <p><strong>共同体</strong>は、その迷いを役職の外で持ち寄るための、少人数・対話型のクローズドな場です。</p>
            </div>
          </div>
        </div>
        <div className="thread-drawing" aria-hidden="true">
          <svg viewBox="0 0 960 200" preserveAspectRatio="none"><path d="M-10,80 C155,190 222,20 395,93 S646,193 760,92 S906,15 980,86" /></svg>
          <span>DECISION TRACE / 01</span>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-rail section-rail--light"><span>02</span><i /></div>
        <div className="principles-heading">
          <p className="section-kicker">OUR AGREEMENT</p>
          <h2>肩書きではなく、<br /><em>問いを持ち寄る。</em></h2>
        </div>
        <div className="principle-list">
          {principles.map((item) => (
            <article className="principle-row" key={item.number}>
              <span className="principle-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ArrowUpRight className="principle-arrow" size={21} strokeWidth={1.5} />
            </article>
          ))}
        </div>
      </section>

      <section className="room-section">
        <div className="room-art">
          <div className="room-photo-wrap"><img src="/manus-storage/kyodotai-blue-notes_98a35e5f.png" alt="静かな机上に置かれた、対話と実験のためのノート" /></div>
          <div className="room-stamp">NO PERFECT<br />ANSWERS</div>
          <div className="room-caption"><span>FIELD NOTES</span><span>— 02:17 AM</span></div>
        </div>
        <div className="room-copy">
          <p className="section-kicker">A ROOM FOR THE REAL</p>
          <h2>わからない、と<br /><em>言えることから。</em></h2>
          <p>完成した成功談だけでは、経営の判断は進みません。見栄えのしない途中経過、社内にまだ言語化できていない違和感、ひとつ前の失敗。ここでは、そうした「現在地」を置いていきます。</p>
          <div className="quote-mark">“</div>
          <p className="pullquote">迷いを持ち寄れる場所から、<br />次の一手は見えてくる。</p>
        </div>
      </section>

      <section className="rhythm-section">
        <div className="section-rail"><span>03</span><i /></div>
        <div className="rhythm-top">
          <div>
            <p className="section-kicker">THE RHYTHM</p>
            <h2>実験は、<br />対話で深くなる。</h2>
          </div>
          <p>情報を集めるための会ではありません。自社の文脈に引き寄せて、曖昧な問いを実行可能な仮説へと編み直す時間です。</p>
        </div>
        <div className="moments-line" aria-hidden="true"><span /><i /><span /><i /><span /></div>
        <div className="moments-grid">
          {moments.map((moment) => (
            <article key={moment.time}>
              <span className="moment-time">{moment.time}</span>
              <h3>{moment.label}</h3>
              <p>{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="image-statement-section">
        <img src="/manus-storage/kyodotai-blue-circle_841c9600.png" alt="異なる視点が一つの方向へ収束することを表す、青い円弧のオブジェ" />
        <div className="image-statement-overlay" />
        <div className="image-statement-copy">
          <p className="eyebrow"><span /> A SMALL CIRCLE, WIDE HORIZON</p>
          <h2>違う景色を見ているから、<br /><em>判断は強くなる。</em></h2>
        </div>
      </section>

      <section id="membership" className="membership-section">
        <div className="membership-geometry" aria-hidden="true"><i /><i /><span /></div>
        <div className="section-rail section-rail--light"><span>04</span><i /></div>
        <div className="membership-layout">
          <div className="membership-intro">
            <p className="section-kicker">FOR THOSE WHO LEAD</p>
            <h2>次の決断を、<br />少しだけ<span>軽く。</span></h2>
          </div>
          <div className="membership-content">
            <p className="membership-lead">AI活用を「導入の話」で終わらせず、経営の問いとして扱いたい方へ。共同体は、率直な対話を大切にできる経営者のための場です。</p>
            <ul>
              <li><Check size={17} strokeWidth={1.8} /> 一人で判断を抱え込みたくない経営者</li>
              <li><Check size={17} strokeWidth={1.8} /> 他社の実験から、思考を磨きたい経営者</li>
              <li><Check size={17} strokeWidth={1.8} /> 失敗も含めて、率直に話せる関係を求める経営者</li>
            </ul>
            <a className="text-cta" href="#closing">
              <span>共同体の考え方を、もっと知る</span><ArrowDownRight size={20} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </section>

      <section id="closing" className="closing-section">
        <div className="closing-orbit" aria-hidden="true"><CircleDotDashed size={265} strokeWidth={0.5} /></div>
        <p className="section-kicker">AN OPEN INVITATION</p>
        <h2>まず、いま抱えている<br /><em>問いを聞かせてください。</em></h2>
        <p className="closing-note">共同体へのご関心や、場づくりについてのご相談は、<br className="hidden sm:block" />個別の対話からご案内します。</p>
        <a className="closing-cta" href="mailto:hello@example.com?subject=%E5%85%B1%E5%90%8C%E4%BD%93%E3%81%B8%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87">
          <span>対話の入口をひらく</span>
          <CornerDownRight size={24} strokeWidth={1.6} />
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top">
          <img src="/manus-storage/kyodotai-blue-mark_1073ec8c.png" alt="" />
          <span className="brand-type"><strong>共同体</strong><small>CO-DECIDE</small></span>
        </a>
        <p>THE COMMUNITY FOR EXPERIMENTS &amp; DECISIONS.</p>
        <span>© 2026 KYODOTAI</span>
      </footer>
    </main>
  );
}

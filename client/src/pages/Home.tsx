/**
 * Design reminder — Salon After Hours:
 * Quiet Systems Light: use an editorial white canvas, navy information hierarchy, blue signal lines,
 * and restrained motion to make executive dialogue feel precise, open, and human.
 */
import { ArrowDownRight, ArrowUpRight, Check, CircleDotDashed, CornerDownRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "うまくいかなかったことを、先に話せる。",
    body: "試してうまくいかなかったこと、感じた戸惑い、まだ判断できないこと。途中の記録も持ち寄り、気づいたことを率直に話し合います。",
  },
  {
    number: "02",
    title: "問いを深め、確かめ方を考える。",
    body: "何がわかれば、判断できるのか。仲間の視点に触れながら、自分の問いを整理し、何を試し、どう結果を確かめるかを考えます。",
  },
  {
    number: "03",
    title: "試した経験を、次の判断につなげる。",
    body: "結果が出た理由をともに考え、問い直し、また試す。経験を振り返る習慣を重ねながら、自分で考え、解決へ進む力を育てます。",
  },
];

const moments = [
  { time: "01 / BRING", label: "問いを持ち寄る", text: "気になっていることを話し、確かめたい問いを見つける。" },
  { time: "02 / TRY", label: "小さく試す", text: "仮説を立てて試し、結果や気づきを記録する。" },
  { time: "03 / REFLECT", label: "確かめ、学び合う", text: "結果の理由を話し合い、次に確かめたい問いにつなげる。" },
];

export default function Home() {
  return (
    <main className="site-shell overflow-hidden bg-white text-[#071a3a]">
      <header className="site-nav">
        <a className="brand brand--lockup" href="#top" aria-label="AI羅深盤 トップへ">
          <span className="brand-lockup-crop"><img src="/manus-storage/ai-rashinban-horizontal_14400c38.png" alt="AI羅深盤" /></span>
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
            <h1>AIと共に生きる。<br /><em>その方法を、</em><br />ともに考え、試す。</h1>
            <div className="hero-bottom">
              <p>経営者同士が問いと経験を持ち寄り、<br className="hidden sm:block" />対話と実験を通じて、判断する力を育てる場所。</p>
              <a className="circle-link" href="#about" aria-label="AI羅深盤について読む">
                <ArrowDownRight size={25} strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-footnote animate-reveal delay-2">
          <span>SCROLL TO ENTER</span>
          <span className="line" />
          <span>対話から実験へ。経験から、新たな問いへ。</span>
        </div>
      </section>

      <section id="about" className="manifesto-section">
        <div className="section-rail"><span>01</span><i /></div>
        <div className="manifesto-grid">
          <p className="section-kicker">WHY WE GATHER</p>
          <div>
            <p className="manifesto-lead">AIと共に生きる<br />リテラシーを、<br />ともに育てる。</p>
            <div className="manifesto-body">
              <p>AIに何を任せ、何を自分で考えるか。出てきた答えをどう確かめ、目の前の問いにどう向き合うか。AIの可能性と限界を知り、自分で考えて選ぶ。そのためのリテラシーを、経験から育てていきます。</p>
              <p><strong>AI羅深盤</strong>は、経営者同士が疑問や試した経験を持ち寄る、少人数の学びの場です。運営者も参加者も、ともに問い、試し、結果を確かめる。その積み重ねを、自分で判断し、解決へ進む力につなげます。</p>
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
          <h2>それぞれの問いから、<br /><em>ともに学ぶ。</em></h2>
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
          <p>まだ言葉にならない疑問、期待と違った結果、途中で止まっている実験。それぞれの「わからない」を持ち寄り、どう確かめられるかを一緒に考えます。互いの経験が、新しい見方や試し方のきっかけになります。</p>
          <div className="quote-mark">“</div>
          <p className="pullquote">ひとりの疑問が、<br />みんなの学びのきっかけになる。</p>
        </div>
      </section>

      <section className="rhythm-section">
        <div className="section-rail"><span>03</span><i /></div>
        <div className="rhythm-top">
          <div>
            <p className="section-kicker">THE RHYTHM</p>
            <h2>実験は、<br />対話で深くなる。</h2>
          </div>
          <p>問いから仮説を立て、小さく試してみる。期待どおりだったことも、違ったことも持ち寄り、その理由をともに考える。そこで生まれた問いを、次の実験につなげます。</p>
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
        <img src="/manus-storage/kyodotai-blue-circle_841c9600.png" alt="異なる視点の重なりを表す、青い円弧のオブジェ" />
        <div className="image-statement-overlay" />
        <div className="image-statement-copy">
          <p className="eyebrow"><span /> A SMALL CIRCLE, WIDE HORIZON</p>
          <h2>違う視点に触れながら、<br /><em>判断のよりどころを育てる。</em></h2>
        </div>
      </section>

      <section id="membership" className="membership-section">
        <div className="membership-geometry" aria-hidden="true"><i /><i /><span /></div>
        <div className="section-rail section-rail--light"><span>04</span><i /></div>
        <div className="membership-layout">
          <div className="membership-intro">
            <p className="section-kicker">FOR THOSE WHO LEAD</p>
            <h2>変化の中で、<br />自分で考え、<span>選ぶ力を。</span></h2>
          </div>
          <div className="membership-content">
            <p className="membership-lead">AIとどう関わり、変化する時代をどう生きるか。AI羅深盤は、その問いに向き合う経営者のためのコミュニティです。互いの経験から学び、自分でも試しながら、考える力と判断する力を育てていきます。</p>
            <ul>
              <li><Check size={17} strokeWidth={1.8} /> AIとの関わり方を、自分で考え、判断したい経営者</li>
              <li><Check size={17} strokeWidth={1.8} /> 仲間と実験・検証を重ね、解決する力を育てたい経営者</li>
              <li><Check size={17} strokeWidth={1.8} /> 疑問や失敗も持ち寄り、対等に学び合いたい経営者</li>
            </ul>
            <a className="text-cta" href="#closing">
              <span>参加について相談する</span><ArrowDownRight size={20} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </section>

      <section id="closing" className="closing-section">
        <div className="closing-orbit" aria-hidden="true"><CircleDotDashed size={265} strokeWidth={0.5} /></div>
        <p className="section-kicker">AN OPEN INVITATION</p>
        <h2>いま気になっていることから、<br /><em>学びを始めませんか。</em></h2>
        <p className="closing-note">AI羅深盤への参加については、<br className="hidden sm:block" />公式LINEからご相談ください。</p>
        <a className="closing-cta" href="https://lin.ee/tDM3iqq" target="_blank" rel="noreferrer">
          <span>公式LINEで参加について相談する</span>
          <CornerDownRight size={24} strokeWidth={1.6} />
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand brand--lockup brand--lockup-footer" href="#top" aria-label="AI羅深盤 トップへ">
          <span className="brand-lockup-crop"><img src="/manus-storage/ai-rashinban-horizontal-transparent_1c27e302.png" alt="AI羅深盤" /></span>
        </a>
        <p>THE COMMUNITY FOR EXPERIMENTS &amp; DECISIONS.</p>
        <p className="site-footer__operator">
          運営：株式会社GAIBAKO
          <br />
          埼玉県朝霞市溝沼7-5-16
          <br />
          お問い合わせ：<a href="mailto:info@gaibako.com">info@gaibako.com</a>
        </p>
        <span>© 2026 KYODOTAI</span>
      </footer>
    </main>
  );
}

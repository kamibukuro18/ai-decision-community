/**
 * Design reminder — AI Compass Registration LP:
 * Use a white dossier-like canvas, navy editorial hierarchy, and blue decision traces.
 * The only conversion is LINE pre-registration; never introduce purchase or application CTAs.
 */
import {
  ArrowDownRight,
  Check,
  ChevronDown,
  Compass,
  MessageCircle,
  Play,
  Radio,
  UsersRound,
  Waypoints,
} from "lucide-react";

const LINE_URL = "https://line.me/R/ti/p/@LINE_OFFICIAL_ACCOUNT";

const concerns = [
  {
    id: "01",
    title: "正直、ChatGPT以外はよく分かっていない。",
    text: "社内ではAI活用を期待される。でも、ツールの違いも、どこまで任せていいのかも、まだ整理できていない。",
  },
  {
    id: "02",
    title: "AIコンサルの見積もりが妥当か、判断できない。",
    text: "提案はもっともらしい。けれど、自社に必要な投資なのか、言い切れる材料がない。",
  },
  {
    id: "03",
    title: "導入したけれど、社員に使われていない。",
    text: "アカウントだけが増えていく。現場に定着させる難しさを、社内ではなかなか口にできない。",
  },
];

const pillars = [
  {
    id: "01",
    label: "MONTHLY CONFERENCE",
    title: "経営者リアル失敗談カンファレンス",
    what: "外に出せない導入失敗談を持ち寄る、月1回の全体会です。",
    why: "成功事例だけでは見えない、投資判断の落とし穴を共有します。",
    Icon: UsersRound,
  },
  {
    id: "02",
    label: "DECISION SESSION",
    title: "少人数制「意思決定」壁打ち",
    what: "5〜6人の経営者で、各社が抱える具体的な迷いを検討します。",
    why: "教わるのではなく、同じ決裁責任を持つ人同士で判断を磨きます。",
    Icon: Waypoints,
  },
  {
    id: "03",
    label: "EXPERIMENT LOG",
    title: "実験ログデータベース",
    what: "プロンプト、SaaSの辛口レビュー、社内浸透の試行錯誤を蓄積します。",
    why: "誰かが払った学習コストを、次の自社判断に活かせます。",
    Icon: Compass,
  },
  {
    id: "04",
    label: "CLOSED GATHERING",
    title: "リアルクローズド交流会",
    what: "四半期に一度を目安に、食事会・経営者ナイトを開催します。",
    why: "画面越しでは生まれにくい信頼と、長く相談できる関係を育てます。",
    Icon: Radio,
  },
];

const plans = [
  {
    name: "梅",
    english: "MEMBERSHIP",
    forWhom: "まずは情報収集から始め、場の雰囲気を知りたい経営者へ。",
    price: "10,000〜15,000円",
    items: ["Facebookグループ参加", "アーカイブ視聴", "月1回の全体会", "チャットでの情報交換"],
  },
  {
    name: "竹",
    english: "MASTERMIND",
    forWhom: "自社への導入を、本気で前に進めたい経営者へ。",
    price: "30,000〜50,000円",
    items: ["梅の全内容", "少人数制の壁打ち会（月1〜2回）", "非公開の限定事例レポート"],
    featured: true,
  },
  {
    name: "松",
    english: "EXECUTIVE CONSULT",
    forWhom: "個別の意思決定やAI戦略策定に伴走が必要な経営者へ。",
    price: "100,000〜150,000円",
    items: ["竹の全内容", "月1回の個別セッション", "経営陣向け内製化サポート"],
  },
];

const faqs = [
  {
    question: "退会はどのように手続きしますか？",
    answer: "LINE公式アカウントからご連絡いただくことで、次回更新分から退会手続きを承ります。不要な引き留めは行いません。",
  },
  {
    question: "経費として処理できますか？",
    answer: "法人契約、請求書払いに対応予定です。インボイス（適格請求書発行事業者）対応の請求書を発行します。具体的な処理は顧問税理士へご確認ください。",
  },
  {
    question: "毎週のラジオ配信に参加できなくても大丈夫ですか？",
    answer: "問題ありません。ライブ参加が難しい場合にも、アーカイブでご確認いただける設計を予定しています。",
  },
  {
    question: "現在の参加人数はどのくらいですか？",
    answer: "現在は2026年10月中旬のキックオフに向けた事前登録期間です。初期メンバーの募集条件は、LINEで順次ご案内します。",
  },
  {
    question: "必要な拘束時間はどの程度ですか？",
    answer: "全体会は月1回、少人数制の壁打ち会は竹プラン以上で月1〜2回を予定しています。必要な情報だけを持ち帰れるよう、過度な拘束を前提としません。",
  },
];

function LineCta({ className = "", label = "LINEで事前登録する" }: { className?: string; label?: string }) {
  return (
    <a className={`line-cta ${className}`} href={LINE_URL} target="_blank" rel="noreferrer">
      <MessageCircle className="line-message-icon" size={18} strokeWidth={1.8} />
      <span className="line-cta-copy"><small><i /> LINE OFFICIAL</small><b>{label}</b></span>
      <ArrowDownRight size={17} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand brand--lockup" href="#top" aria-label="AI羅針盤 トップへ">
          <span className="brand-lockup-crop"><img src="/manus-storage/ai-rashinban-horizontal_14400c38.png" alt="AI羅針盤" /></span>
        </a>
        <LineCta className="nav-line-cta" label="LINEで事前登録" />
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PRE-REGISTRATION / OCT 2026</p>
          <p className="hero-eyebrow-note">AI投資の「正解」を急がない、経営者のための対話会。</p>
          <h1>AIに、<br /><em>いくら溶かしましたか。</em></h1>
          <p className="hero-lead">流行りに振り回されず、自社に必要な投資だけを見極める。<br />中小企業・ベンチャー企業の経営者のための、クローズドな対話の場です。</p>
          <div className="hero-actions">
            <LineCta label="LINEで事前登録する" />
            <p>キックオフ予定<br /><strong>2026年10月中旬</strong></p>
          </div>
          <div className="hero-trace" aria-hidden="true"><i /><span>DECISION TRACE / 01</span></div>
        </div>
        <div className="hero-stage" aria-label="AI羅針盤を表す、羅針盤と検証室のビジュアル">
          <img className="hero-stage-photo" src="/manus-storage/kyodotai-blue-hero_b02fcf1a.png" alt="" />
          <div className="hero-stage-tint" />
          <div className="hero-compass-mark"><img src="/manus-storage/rashinbanrogo_4cdaa0ed.png" alt="" /></div>
          <p>DO NOT BUY<br />WHAT YOU CANNOT JUDGE.</p>
        </div>
      </section>

      <section className="section section--concerns" id="concerns">
        <div className="section-index"><span>01</span><i /></div>
        <div className="brand-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="section-intro">
          <p className="section-kicker">THE THINGS YOU CANNOT SAY</p>
          <h2>社員の前では、<br /><em>言えないことがある。</em></h2>
          <p>AIに乗り遅れる不安よりも、よく分からないまま高額な投資をしてしまうことのほうが、経営には重い。その迷いを、ひとりで抱えないために。</p>
        </div>
        <div className="concern-list">
          {concerns.map((concern) => (
            <article className="concern-card" key={concern.id}>
              <span>{concern.id}</span>
              <h3>{concern.title}</h3>
              <p>{concern.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--definition" id="about">
        <div className="brand-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="definition-visual">
          <img src="/manus-storage/kyodotai-blue-circle_841c9600.png" alt="異なる視点が交わる青い円弧のオブジェ" />
          <span>ORIENT / VERIFY / DECIDE</span>
        </div>
        <div className="definition-copy">
          <p className="section-kicker">WHAT IS AI RASHINBAN?</p>
          <h2>AI羅針盤は、<br /><em>AI判断力を磨く場。</em></h2>
          <p>AIの使い方を教える講座でも、特定のツールを売る場でもありません。経営者が個として集まり、失敗談と試行錯誤を持ち寄りながら、自社に必要な投資を見極めるための対話の場です。</p>
          <div className="definition-rule">
            <span>WE DO</span>
            <p>意思決定の材料を増やす。</p>
            <span>WE DO NOT</span>
            <p>誰かの成功パターンを、そのまま売らない。</p>
          </div>
          <div className="compass-note">
            <Compass size={23} strokeWidth={1.45} />
            <p><strong>羅針盤</strong>は、正解を教える道具ではありません。現在地と向きを確かめ、次の一手を選ぶためのものです。</p>
          </div>
        </div>
      </section>

      <section className="section section--pillars" id="contents">
        <div className="section-index"><span>02</span><i /></div>
        <div className="brand-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">FOUR WAYS TO SEE CLEARLY</p>
            <h2>判断を磨く、<br /><em>4つの接点。</em></h2>
          </div>
          <p>AI活用を「知る」だけで終わらせないために。失敗を見て、問いを話し、試行錯誤を残し、関係を育てる。4つの接点を用意します。</p>
        </div>
        <div className="pillar-grid">
          {pillars.map(({ id, label, title, what, why, Icon }) => (
            <article className="pillar-card" key={id}>
              <div className="pillar-top"><span>{id}</span><Icon size={23} strokeWidth={1.45} /></div>
              <p className="pillar-label">{label}</p>
              <h3>{title}</h3>
              <div className="pillar-copy"><p><b>何をするか</b>{what}</p><p><b>なぜ意味があるか</b>{why}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="inside-section" id="inside">
        <div className="inside-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="inside-copy">
          <p className="section-kicker">LISTEN BEFORE YOU JOIN</p>
          <h2>入る前に、<br /><em>中の空気を知る。</em></h2>
          <p>毎週のオンラインラジオでは、ツールの話だけでなく、経営者が実際に迷っている判断を扱います。入会前に雰囲気を確かめられるよう、配信抜粋を公開予定です。</p>
          <p className="inside-footnote">60〜90秒の配信抜粋動画を、ここに掲載予定です。</p>
        </div>
        <div className="video-placeholder" role="img" aria-label="オンラインラジオ配信の抜粋動画プレースホルダー">
          <div className="video-topline"><span>WEEKLY ONLINE RADIO</span><span>PREVIEW / COMING SOON</span></div>
          <button type="button" className="play-button" aria-label="動画公開予定"><Play size={28} fill="currentColor" strokeWidth={1.3} /></button>
          <div className="video-caption"><span>AI羅針盤 RADIO</span><strong>「その投資、本当に今ですか？」</strong></div>
        </div>
      </section>

      <section className="section section--hosts" id="hosts">
        <div className="section-index"><span>03</span><i /></div>
        <div className="brand-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">HOSTS &amp; OPERATIONS</p>
            <h2>運営の考え方を、<br /><em>先に示す。</em></h2>
          </div>
          <p>AI羅針盤は、株式会社GAIBAKOが運営します。初期登録段階の現在は、二人体制と役割を先に公開し、主宰者・運営メンバーの顔写真、経歴、実績はキックオフまでに順次開示します。</p>
        </div>
        <div className="host-grid">
          <article className="host-card"><div className="host-dossier"><span>01 / HOST</span><strong>判断を、<br />言葉にする。</strong><i /><small>顔写真・経歴・実績は<br />キックオフ前に公開予定</small></div><p>HOST / STRATEGY</p><h3>主宰・対話設計</h3><span>経営者の迷いを、対話可能な問いへ編み直します。</span></article>
          <article className="host-card"><div className="host-dossier host-dossier--second"><span>02 / OPERATIONS</span><strong>実験を、<br />続く仕組みにする。</strong><i /><small>顔写真・経歴・実績は<br />キックオフ前に公開予定</small></div><p>OPERATIONS / COMMUNITY</p><h3>運営・場づくり</h3><span>率直な情報交換が続くための、場の運営を担います。</span></article>
        </div>
      </section>

      <section className="registration-section">
        <div className="registration-orbit" aria-hidden="true"><i /><i /><span /></div>
        <div className="registration-copy">
          <p className="section-kicker">KICKOFF / MID-OCTOBER 2026</p>
          <h2>始まる前に、<br /><em>現在地を置いておく。</em></h2>
          <p>キックオフ日程、初期メンバーのご案内、登録に関する詳細は、LINE公式アカウントで先行してお届けします。</p>
          <LineCta label="LINEで事前登録する" />
        </div>
      </section>

      <section className="section section--plans" id="plans">
        <div className="section-index"><span>04</span><i /></div>
        <div className="brand-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">MEMBERSHIP PLANS</p>
            <h2>関わり方を、<br /><em>自社の現在地から。</em></h2>
          </div>
          <p>料金は事前に開示します。ただし、このページからの申込みは受け付けません。詳細・開始条件はLINEでご案内します。</p>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? "plan-card--featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="plan-recommended">MAIN PLAN</span>}
              <p className="plan-type">{plan.english}</p>
              <h3>{plan.name}</h3>
              <p className="plan-for">{plan.forWhom}</p>
              <p className="plan-price"><small>MONTHLY</small>{plan.price}<span>（税別予定）</span></p>
              <ul>{plan.items.map((item) => <li key={item}><Check size={15} strokeWidth={2} />{item}</li>)}</ul>
              <p className="plan-detail">詳細はLINEでご案内します。</p>
            </article>
          ))}
        </div>
        <p className="invoice-note">法人契約可 ／ 請求書払い可 ／ インボイス（適格請求書発行事業者）対応</p>
      </section>

      <section className="section section--faq" id="faq">
        <div className="section-index"><span>05</span><i /></div>
        <div className="brand-trace" aria-hidden="true"><i /><i /><b /></div>
        <div className="faq-layout">
          <div><p className="section-kicker">FAQ</p><h2>始める前の、<br /><em>よくある確認。</em></h2></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item" open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span><b>{faq.question}</b><ChevronDown size={20} strokeWidth={1.6} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section" id="registration">
        <div className="closing-compass" aria-hidden="true"><img src="/manus-storage/rashinbanrogo_4cdaa0ed.png" alt="" /></div>
        <div className="closing-content">
          <p className="section-kicker">PRE-REGISTRATION NOW OPEN</p>
          <h2>次の投資を、<br /><em>「なんとなく」で決めない。</em></h2>
          <p>AI羅針盤の開始情報と事前登録の詳細は、LINE公式アカウントからお届けします。</p>
          <LineCta label="LINEで事前登録する" />
        </div>
      </section>

      <footer className="site-footer" id="legal">
        <a className="brand brand--lockup brand--lockup-footer" href="#top" aria-label="AI羅針盤 トップへ"><span className="brand-lockup-crop"><img src="/manus-storage/ai-rashinban-horizontal_14400c38.png" alt="AI羅針盤" /></span></a>
        <div className="footer-details"><p>運営：株式会社GAIBAKO</p><p>所在地：［準備中］　電話番号：［準備中］</p><a href="#legal">特定商取引法に基づく表記［準備中］</a></div>
        <span>© 2026 GAIBAKO INC.</span>
      </footer>

      <div className="mobile-line-bar"><LineCta label="LINEで事前登録する" /></div>
    </main>
  );
}

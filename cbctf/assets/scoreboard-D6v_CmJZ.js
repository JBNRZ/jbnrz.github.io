import{r as d,j as e,B as P,m as C,e as M,t as N}from"./index-ONk2F1V0.js";import{i as O}from"./contest-CbvVzEpr.js";import{A as $}from"./AdminPagination-CcVUHRVC.js";import{I as z}from"./IconDownload-BzPX4M11.js";import{I as B}from"./IconEdit-CJ2R7LvN.js";import{I as H}from"./IconRefresh-DvvidWUX.js";import"./createReactComponent-D-MKSgGK.js";const D={WEB:"bg-blue-400",CRYPTO:"bg-purple-400",PWN:"bg-red-400",REVERSE:"bg-green-400",MISC:"bg-yellow-400"};function K({solved:i,totalSolved:x}){const c=x-Object.values(i).reduce((o,s)=>o+s,0);return e.jsxs("div",{className:"flex items-center justify-center gap-2 w-full",children:[Object.entries(i).map(([o,s])=>s<=0?null:e.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-xs",title:`${o}: ${s}`,children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${D[o]||"bg-gray-400"}`}),e.jsx("span",{className:"text-neutral-300",children:s})]},o)),c>0&&e.jsxs("div",{className:"flex items-center gap-1.5 font-mono text-xs",title:`未解题目: ${c}`,children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-neutral-600"}),e.jsx("span",{className:"text-neutral-400",children:c})]})]})}function U({totalTeams:i,totalSolves:x,highestScore:c,totalPlayers:o}){const s=[{label:"Total Teams",value:i,valueClass:"text-neutral-50"},{label:"Total Players",value:o,valueClass:"text-neutral-50"},{label:"Total Solves",value:x,valueClass:"text-geek-400"},{label:"Highest Score",value:c,valueClass:"text-yellow-400"}];return e.jsx("div",{className:"grid grid-cols-4 gap-6",children:s.map((n,u)=>{var m;return e.jsxs(C.div,{className:"border border-neutral-300 rounded-md bg-black/30 backdrop-blur-[2px] p-4",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.2,delay:u*.05},children:[e.jsx("div",{className:"text-neutral-400 text-sm",children:n.label}),e.jsx(C.div,{className:`font-mono text-2xl ${n.valueClass}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:u*.05},children:((m=n.value)==null?void 0:m.toLocaleString())||0})]},u)})})}function W({stats:i,teams:x=[],currentPage:c=1,totalPages:o=1,pageSize:s=6,totalCount:n=0,onPageChange:u,onResetTeamScore:m,onUpdateTeamScore:T,onExportScoreboard:f}){const[A,y]=d.useState(null),[v,g]=d.useState(null),[S,k]=d.useState(""),I=t=>{g(t),k(t.score.toString())},r=()=>{if(v&&T){const t=parseInt(S);isNaN(t)||T(v.id,t)}g(null)},l=()=>{g(null)};return e.jsxs("div",{className:"w-full max-w-[1200px] mx-auto space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-3xl font-mono text-neutral-50 tracking-wider",children:"积分榜管理"}),e.jsx(P,{variant:"primary",size:"sm",align:"icon-left",icon:e.jsx(z,{size:18}),onClick:f,children:"导出积分榜"})]}),e.jsx(U,{...i}),e.jsxs(C.div,{className:"border border-neutral-300 rounded-md bg-black/30 backdrop-blur-[2px] overflow-hidden",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[e.jsxs("div",{className:"grid grid-cols-[80px_240px_120px_auto_120px_150px] gap-4 p-4 border-b border-neutral-300/30 place-items-center",children:[e.jsx("div",{className:"text-neutral-400 font-mono text-sm",children:"RANK"}),e.jsx("div",{className:"text-neutral-400 font-mono text-sm",children:"TEAM"}),e.jsx("div",{className:"text-neutral-400 font-mono text-sm flex items-center justify-end",children:"SCORE"}),e.jsx("div",{className:"text-neutral-400 font-mono text-sm flex items-center justify-center",children:"CHALLENGES"}),e.jsx("div",{className:"text-neutral-400 font-mono text-sm flex items-center justify-end",children:"LAST SUBMIT"}),e.jsx("div",{className:"text-neutral-400 font-mono text-sm flex items-center justify-end",children:"OPERATIONS"})]}),e.jsx("div",{className:"divide-y divide-neutral-300/10",children:x.length===0?e.jsx("div",{className:"py-12 flex justify-center items-center",children:e.jsx("p",{className:"text-neutral-400 font-mono",children:"暂无数据"})}):x.map((t,w)=>e.jsxs(C.div,{className:"grid grid-cols-[80px_240px_120px_auto_120px_150px] gap-4 p-4 hover:bg-neutral-300/5 transition-colors duration-200 place-items-center",onMouseEnter:()=>y(w),onMouseLeave:()=>y(null),children:[e.jsx("div",{className:"flex items-center",children:e.jsxs("span",{className:`font-mono text-xl
                                      ${t.rank===1?"text-yellow-400":t.rank===2?"text-neutral-300":t.rank===3?"text-orange-400":"text-neutral-400"}
                                  `,children:["#",t.rank]})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg border border-neutral-300/30 bg-neutral-700/50 bg-cover bg-center",style:{backgroundImage:`url(${t.avatar||"/default-team-avatar.png"})`}}),e.jsx("span",{className:"text-neutral-50 font-mono",children:t.name})]}),e.jsx("div",{className:"flex items-center justify-end",children:v&&v.id===t.id?e.jsx("input",{type:"number",value:S,onChange:h=>k(h.target.value),className:"w-20 bg-black/50 border border-geek-400 rounded-md p-1 text-neutral-50 font-mono text-center",autoFocus:!0,onKeyDown:h=>{h.key==="Enter"&&r(),h.key==="Escape"&&l()},onBlur:r}):e.jsx("span",{className:"text-geek-400 font-mono",children:t.score.toLocaleString()})}),t.solved&&e.jsx(K,{solved:t.solved,totalSolved:t.totalSolved}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("span",{className:"text-neutral-400 font-mono text-sm",children:t.lastSubmit})}),e.jsxs("div",{className:"flex items-center justify-end gap-3",children:[e.jsx(P,{variant:"ghost",size:"icon",className:"!text-geek-400 hover:!text-geek-300",onClick:()=>I(t),children:e.jsx(B,{size:18})}),e.jsx(P,{variant:"ghost",size:"icon",className:"!text-yellow-400 hover:!text-yellow-300",onClick:()=>m==null?void 0:m(t.id),children:e.jsx(H,{size:18})})]})]},w))})]}),n>s&&e.jsx("div",{className:"mt-6",children:e.jsx($,{total:Math.ceil(n/s),current:c,pageSize:s,onChange:u,showTotal:!0,totalItems:n})})]})}function Q(){const{id:i}=M(),[x,c]=d.useState([]),[o,s]=d.useState(0),[n,u]=d.useState(1),[m,T]=d.useState(!0),f=20,[A,y]=d.useState({totalTeams:0,totalSolves:0,highestScore:0,totalPlayers:0});d.useEffect(()=>{v()},[i,n]);const v=async(r=!1)=>{try{const l=await O(parseInt(i),{limit:f,offset:(n-1)*f},r);if(l.code===200){let t;m?t=l.data.teams:t=l.data.teams.filter(a=>!a.hidden);const w=Math.max(...t.map(a=>a.score),0),h=t.reduce((a,j)=>a+j.users,0),_=t.reduce((a,j)=>{var b;const E=((b=j.solved)==null?void 0:b.reduce((p,R)=>p+(R.solved||0),0))||0;return a+E},0);y({totalTeams:t.length,totalSolves:_,highestScore:w,totalPlayers:h});const L=t.map((a,j)=>{const E={};let b=0;return a.solved&&Array.isArray(a.solved)&&a.solved.forEach(p=>{p.category&&(E[p.category]=p.solved||0,b+=p.all||0)}),{...a,rank:(n-1)*f+j+1,lastSubmit:g(a.last),solved:E,totalSolved:b}});c(L),s(l.data.count)}else N.danger({description:l.msg||"获取团队列表失败"})}catch(l){console.error("获取团队列表失败:",l),N.danger({description:"获取团队列表失败"})}},g=r=>!r||r==="0001-01-01T00:00:00Z"?"无提交":new Date(r).toLocaleString(),S=async r=>{N.info({description:"此功能暂未实现"})},k=async(r,l)=>{N.info({description:"此功能暂未实现"})},I=async()=>{N.info({description:"此功能暂未实现"})};return e.jsx(W,{stats:A,teams:x,currentPage:n,pageSize:f,totalCount:o,onPageChange:u,onResetTeamScore:S,onUpdateTeamScore:k,onExportScoreboard:I})}export{Q as default};

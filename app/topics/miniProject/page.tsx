'use client';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { useState } from 'react';

const light = { bg:'#f7fbff', text:'#0b2447', surface:'#ffffff', accent:'#7fba00' };
const dark  = { bg:'#0b2447', text:'#ffffff', surface:'#102341', accent:'#7fba00' };

const Shell = styled.div`
  min-height: 100vh;
  background: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text};
  transition: background .3s ease, color .3s ease;
`;
const Container = styled.div`
  max-width: 1100px; margin: 0 auto; padding: 1.25rem;
`;
const Section = styled.section`
  background: ${({theme})=>theme.surface};
  border-radius: 16px; padding: 1.25rem 1.25rem 1.5rem;
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
  margin: 1rem 0;
`;
const H2 = styled.h2` margin: 0 0 .75rem; color: ${({theme})=>theme.text}; `;

const Bar = styled.nav`
  display:flex; align-items:center; justify-content:space-between;
  padding: .9rem 1rem; background:${({theme})=>theme.surface};
  border-radius: 14px; box-shadow: 0 6px 18px rgba(0,0,0,.1); margin-bottom: 1rem;
  position: sticky; top: .75rem; z-index: 10;
`;
const Brand = styled.div`font-weight: 800;`;
const MenuBtn = styled.button`
  border:none; background:${({theme})=>theme.accent}; color:#fff;
  padding:.5rem .8rem; border-radius:8px; display:none; cursor:pointer; font-weight:600;
  @media (max-width: 768px){ display:block; }
`;
const Links = styled.ul<{open?:boolean}>`
  display:flex; gap:1rem; list-style:none; margin:0; padding:0; align-items:center;
  a{ color:${({theme})=>theme.text}; text-decoration:none; font-weight:600; }
  @media (max-width:768px){
    position:absolute; left:0; right:0; top:64px; background:${({theme})=>theme.surface};
    flex-direction:column; padding:1rem; border-radius: 12px;
    box-shadow: 0 10px 24px rgba(0,0,0,.12);
    display:${p=>p.open?'flex':'none'};
  }
`;

const LoginCard = styled.form`
  width:340px; padding:2rem; border-radius:16px; background:${({theme})=>theme.surface};
  box-shadow:0 8px 24px rgba(0,0,0,.15); display:grid; gap:1rem;
`;
const Input = styled.input`
  padding:.75rem .9rem; border-radius:10px; border:1px solid #cfd6e4; outline:none;
  background:#fff; color:#111;
  &:focus{ border-color:${({theme})=>theme.accent}; box-shadow:0 0 0 3px rgba(127,186,0,.2); }
`;
const Primary = styled.button`
  padding:.8rem 1.2rem; border-radius:10px; border:none; color:#fff; cursor:pointer; font-weight:700;
  background:${({theme})=>theme.accent};
  &:hover{ filter:brightness(.92); }
`;

const pulse = keyframes`
  0% { transform: translateY(0) scale(1); box-shadow:0 0 0 0 rgba(127,186,0,.4); }
  50% { transform: translateY(-2px) scale(1.02); box-shadow:0 0 0 12px rgba(127,186,0,0); }
  100% { transform: translateY(0) scale(1); box-shadow:0 0 0 0 rgba(127,186,0,0); }
`;
const PulseButton = styled(Primary)`
  animation: ${pulse} 1.6s ease-in-out infinite;
`;

const Grid = styled.div`
  display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); gap:1.25rem;
  @media (max-width:1024px){ grid-template-columns:repeat(3,1fr); }
  @media (max-width:768px){ grid-template-columns:repeat(2,1fr); }
  @media (max-width:480px){ grid-template-columns:1fr; }
`;
const Card = styled.div`
  background:#fff; border-radius:14px; padding:1.25rem;
  box-shadow:0 8px 24px rgba(0,0,0,.08); transition:transform .25s, box-shadow .25s;
  &:hover{ transform:translateY(-6px); box-shadow:0 14px 34px rgba(0,0,0,.12); }
  h4{ margin:0 0 .4rem; color:#000; }
  p{ margin:0; color:#333; }
`;

const TwoCol = styled.div`
  display:flex; gap:1.25rem; align-items:flex-start; flex-wrap:wrap;
`;
const Spacer = styled.div` height: .25rem; `;

export default function AllInOne(){
  const [darkMode, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Shell>
        <Container>
          <Bar>
            <Brand>Jouer UI</Brand>
            <MenuBtn onClick={()=>setMenuOpen(o=>!o)}>{menuOpen?'Close':'Menu'}</MenuBtn>
            <Links open={menuOpen}>
              <li><a href="#login">Login</a></li>
              <li><a href="#animated">Animated Button</a></li>
              <li><a href="#grid">Card Grid</a></li>
              <li><a href="#mode">Mode Switcher</a></li>
            </Links>
          </Bar>

          <Section id="mode">
            <H2>Dark / Light Mode Switcher</H2>
            <Primary onClick={()=>setDark(v=>!v)} style={{marginTop:'.5rem'}}>
              {darkMode ? 'Switch to Light' : 'Switch to Dark'}
            </Primary>
          </Section>

          <Section id="login">
            <H2>Themed Login Form</H2>
            <TwoCol>
              <LoginCard onSubmit={(e)=>e.preventDefault()}>
                <label style={{fontWeight:700}}>Email</label>
                <Input type="email" placeholder="you@example.com" required />
                <label style={{fontWeight:700}}>Password</label>
                <Input type="password" placeholder="••••••••" required />
                <Primary type="submit">Login</Primary>
              </LoginCard>

              <div style={{display:'grid', placeItems:'center', minWidth:260, flex:1}}>
                <div>
                  <h3 style={{margin:'0 0 .5rem'}}>Animated Button</h3>
                  <p style={{margin:'0 0 1rem', color:'#333', maxWidth:360}}>
                    Eye-catching CTA using a pulse animation.
                  </p>
                  <PulseButton>Pulse CTA</PulseButton>
                </div>
              </div>
            </TwoCol>
          </Section>

          <Section id="grid">
            <H2>Card Grid with Hover Effects</H2>
            <p style={{margin:'0 0 1rem', color:'#333'}}>Responsive grid that elevates on hover.</p>
            <Grid>
              {Array.from({length:8}).map((_,i)=>(
                <Card key={i}>
                  <h4>Card {i+1}</h4>
                  <p>Hover me for elevation.</p>
                </Card>
              ))}
            </Grid>
          </Section>

          <Spacer />
        </Container>
      </Shell>
    </ThemeProvider>
  );
}

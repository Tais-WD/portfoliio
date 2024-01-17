'use client'
import Image from 'next/image'
import styled from 'styled-components';
import colors from './constants/colors';
import { promises as fs } from 'fs';

const Heading = styled.h2`
  color: red;
  font-size: 24px;
  background: ${colors.darkBg};
`;
const Wrapper = styled.main`
  background: ${colors.darkBg};
  height: 100vh;
`;

const Home = async () => {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <Wrapper>
      <div>
      <Heading>{data.hero.name}</Heading>
      <Heading>{data.hero.position}</Heading>
      </div>

      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

    </Wrapper>
  )
}
export default Home;

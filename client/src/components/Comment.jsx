import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

export default function Comment() {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsam
          laborum dolorum nulla cupiditate sed at minus obcaecati, ut architecto
          incidunt odit possimus libero commodi? Repudiandae necessitatibus amet
          magnam! Cumque.
        </Text>
      </Details>
    </Container>
  );
}

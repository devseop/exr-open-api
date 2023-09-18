import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./api/api";
import { IMissingPerson } from "./type/types";
import styled from "@emotion/styled";

function App() {
  const [data, setData] = useState<IMissingPerson[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result.list);
      setLoading(true);
    };

    fetchData();
  }, []);

  if (!loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <AppContainer>
      <h1>실종 아동 명단</h1>
      <ListContainer>
        {data?.map((item) => (
          <ListItem key={item.rnum}>
            {!item.tknphotoFile ? (
              <BlankImg></BlankImg>
            ) : (
              <img
                src={`data:image/png;base64, ${item.tknphotoFile}`}
                alt={`${item.nm}`}
              />
            )}
            <TextContainer>
              <h3>{item.nm}</h3>
              <DescContainer>
                <Desc>
                  <span>실종장소</span>
                  <span>{item.occrAdres}</span>
                </Desc>
                <Desc>
                  <span>실종일</span>
                  <span>{item.occrde}</span>
                </Desc>
                <Desc>
                  <span>특이사항</span>
                  <span>{item.etcSpfeatr}</span>
                </Desc>
              </DescContainer>
            </TextContainer>
          </ListItem>
        ))}
      </ListContainer>
    </AppContainer>
  );
}

const AppContainer = styled.main`
  margin: 64px auto;

  h1 {
    margin-bottom: 56px;
  }
`;

const ListContainer = styled.ul`
  max-width: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 28px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const BlankImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 200px;

  h3 {
    margin-bottom: 12px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Desc = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-size: 14px;
    font-weight: 700;

    &:nth-of-type(1) {
      color: rgba(255, 255, 255, 0.4);
      font-weight: 500;
    }
  }
`;

export default App;

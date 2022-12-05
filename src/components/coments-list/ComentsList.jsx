import React from "react";
import { Rating } from "@mui/material";
import { Box, ComentsContainer, Text, Datas } from "./ComentsListStyle";

function ComentsList() {
  return (
    <ComentsContainer>
      <h3>Comentarios</h3>
      <Box>
        <Datas>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            style={{ color: "#2370E0" }}
            precision={0.5}
            readOnly
          />
        </Datas>
        <Text>
          <h4>Alexandra</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            voluptate ullam reprehenderit est distinctio nostrum ipsum dolorum
            sed quaerat sunt a vel provident nobis, error autem quibusdam
            tempora adipisci facilis.
          </p>
        </Text>
      </Box>

      <Box>
        <Datas>
          <Rating
            name="half-rating-read"
            defaultValue={4}
            style={{ color: "#2370E0" }}
            precision={0.5}
            readOnly
          />
        </Datas>
        <Text>
          <h4>Albert</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            voluptate ullam reprehenderit est distinctio nostrum ipsum dolorum
            sed quaerat sunt a vel provident nobis, error autem quibusdam
            tempora adipisci facilis.
          </p>
        </Text>
      </Box>

      <Box>
        <Datas>
          <Rating
            name="half-rating-read"
            defaultValue={5}
            style={{ color: "#2370E0" }}
            precision={0.5}
            readOnly
          />
        </Datas>
        <Text>
          <h4>Alejandra</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            voluptate ullam reprehenderit est distinctio nostrum ipsum dolorum
            sed quaerat sunt a vel provident nobis, error autem quibusdam
            tempora adipisci facilis.
          </p>
        </Text>
      </Box>

      <Box>
        <Datas>
          <Rating
            name="half-rating-read"
            defaultValue={4}
            style={{ color: "#2370E0" }}
            precision={0.5}
            readOnly
          />
        </Datas>
        <Text>
          <h4>Federico</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            voluptate ullam reprehenderit est distinctio nostrum ipsum dolorum
            sed quaerat sunt a vel provident nobis, error autem quibusdam
            tempora adipisci facilis.
          </p>
        </Text>
      </Box>

      <Box>
        <Datas>
          <Rating
            name="half-rating-read"
            defaultValue={3}
            style={{ color: "#2370E0" }}
            precision={0.5}
            readOnly
          />
        </Datas>
        <Text>
          <h4>Eberth</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            voluptate ullam reprehenderit est distinctio nostrum ipsum dolorum
            sed quaerat sunt a vel provident nobis, error autem quibusdam
            tempora adipisci facilis.
          </p>
        </Text>
      </Box>
    </ComentsContainer>
  );
}

export default ComentsList;

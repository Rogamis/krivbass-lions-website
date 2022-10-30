import React from 'react'
import { Grid, Paper, Box } from "@mui/material";
import Logo from './objectLogo';

function TeamsGrid() {
  return (
    <Box style={{
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-evenly",
      alingItems: "stretch",
      flexWrap: "wrap",
    }}>
      <Grid>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        >
          <img
            src={Logo.KLJunior}
            style={{
              height: 200,
              width: 200,
              marginTop: 10,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <img
          src={Logo.Atlanta}
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        ></img>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.KLDota}
            style={{
              height: 200,
              width: 200,
              marginTop: 10,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.Kiken}
            style={{
              height: 170,
              width: 210,
              marginTop: 20,
              zIndex: 0,
            }}
          ></img>
        </Paper>
      </Grid>
      <Grid>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.CarpeDiem}
            style={{
              height: 200,
              width: 200,
              marginTop: 20,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <img
          src={Logo.SH}
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        ></img>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.Ephemeral}
            style={{
              height: 180,
              width: 200,
              marginTop: 20,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.GW}
            style={{
              height: 190,
              width: 200,
              marginTop: 10,
              zIndex: 0,
            }}
          ></img>
        </Paper>
      </Grid>
      <Grid>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.HellPeek}
            style={{
              height: 200,
              width: 200,
              marginTop: 0,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <img
          src={Logo.Diversion}
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        ></img>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.MainBrand}
            style={{
              height: 200,
              width: 200,
              marginTop: 5,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <img
          src={Logo.Paradox}
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        ></img>
      </Grid>
      <Grid>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.HellFire}
            style={{
              height: 200,
              width: 200,
              marginTop: 5,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <img
          src={Logo.HellSide}
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        ></img>
        <Paper
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
          }}
        >
          <img
            src={Logo.Qam}
            style={{
              height: 200,
              width: 200,
              marginTop: 5,
              zIndex: 0,
            }}
          ></img>
        </Paper>
        <img
          src={Logo.Vipers}
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            zIndex: 0,
          }}
        ></img>
      </Grid>
    </Box>
  );
}

export default TeamsGrid
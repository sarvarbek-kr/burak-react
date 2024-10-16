import { useState, SyntheticEvent } from 'react';
import { Container, Stack, Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PausedOrders from './PausedOrders';
import ProcessOrders from './ProcessOrders';
import FinishedOrders from './FinishedOrders';
import '../../../css/orders.css';

export default function OrdersPage() {
  const [value, setValue] = useState('1');

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab label="PAUSED ORDERS" value="1" />
                  <Tab label="PROCESS ORDERS" value="2" />
                  <Tab label="FINISHED ORDERS" value="3" />
                </Tabs>
              </Box>
            </Box>
            
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  className={"order-user-avatar"}
                  src={"/icons/default-user.svg"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    className={"order-user-prof-img"}
                    src={"/icons/user-badge.svg"}
                  />
                </div>
              </div>
              <span className={"order-user-name"}>Walter</span>
              <span className={"order-user-prof"}>User</span>
            </Box>
            <Box className={"liner"}></Box>
            <Box className={"order-user-address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className={"spec-address-txt"}>Surkhandarya Uzbekistan</div>
            </Box>
          </Box>
          <Box className={"order-info-box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"cardNumber"}
              placeholder={"  Card number : 1111 1245 5655 8796"}
              className={"card-input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "332px",
              }}
            >
              <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"  05 / 25"}
                className={"card-half-input"}
              />
              <input
                type={"text"}
                name={"cardCVV"}
                placeholder={"  CVV : 088"}
                className={"card-half-input"}
              />
            </div>
            <input
              type={"text"}
              name={"cardCreator"}
              placeholder={"  Walter Stephen"}
              className={"card-input"}
            />
            <div className={"cards-box"}>
              <img src={"/icons/western-card.svg"} />
              <img src={"/icons/master-card.svg"} />
              <img src={"/icons/paypal-card.svg"} />
              <img src={"/icons/visa-card.svg"} />
            </div>
          </Box>
        </Stack>


      </Container>
    </div>
  );
  

}
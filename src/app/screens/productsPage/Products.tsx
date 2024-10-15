import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const products = [
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products () {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={'column'} alignItems={'center'}>

            <Stack className={"avatar-big-box"} justifyContent={'space-between'}>
                    <p>Burak Restaurant</p>
                    <Stack flexDirection={'row'} position={'relative'} alignItems={'center'}>
                       <input type="search" placeholder="Type here"/>
                       <Button className="search-btn" color="secondary">SEARCH
                        <SearchIcon/>
                       </Button>
                    </Stack>
            </Stack>

            <Stack className={"dishes-filter-section"}>
                <Stack className={"dishes-filter-box"}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        className={"order"}>
                            New
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        className={"order"}>
                            Price
                    </Button>
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        className={"order"}>
                            Views
                    </Button>
                </Stack>
            </Stack>

            <Stack className={"list-category-section"}>
                <Stack className={"product-category"}>
                    <div className={"category-main"}>
                        <Button variant={"contained"} color={"secondary"}>
                            Other
                        </Button>
                        <Button variant={"contained"} color={"secondary"}>
                            Dessert
                        </Button>
                        <Button variant={"contained"} color={"secondary"}>
                            Drink
                        </Button>
                        <Button variant={"contained"} color={"secondary"}>
                            Salad
                        </Button>
                        <Button variant={"contained"} color={"primary"}>
                            Dish
                        </Button>
                    </div>
                </Stack>
                <Stack className={"product-wrapper"}>
                    {products.length !== 0 ? (
                        products.map((product, index) => {
                            return (
                            <Stack key={index} className={"product-card"}>
                                <Stack
                                className={"product-img"}
                                sx={{ backgroundImage: `url(${product.imagePath})`}} >
                                <div className={"product-scale"}>Normal size</div>
                                <Button className={"shop-btn"}>
                                    <img 
                                    alt=""
                                    src={"/icons/shopping-cart.svg"}
                                    style={{ display: "flex "}}
                                    />
                                </Button>
                                <Button className={"view-btn"} sx={{ right: "36px"}}>
                                    <Badge badgeContent={20} color={"secondary"}>
                                        <RemoveRedEyeIcon
                                        sx={{
                                            color: 20 ? "white" : "gray",
                                        }}
                                        />
                                    </Badge>
                                </Button>
                                </Stack>
                                <Box className={"product-desc"}>
                                    <span className={"product-tittle"}>
                                        {product.productName}
                                    </span>
                                    <div className={"product-desc"}>
                                        <MonetizationOnIcon/>
                                        {13}
                                    </div>
                                </Box>
                            </Stack>
                            );
                        })
                    ) : (
                        <Box className="no-data">Products are not available</Box>
                    )}
                </Stack>
            </Stack>

            <Stack className={"pagination-section"}>
                <Pagination
                count={3}
                page={1}
                renderItem={(item) => (
                    <PaginationItem
                    components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                    }}
                    {...item}
                    color={"secondary"}
                    />
                )}
            />
            </Stack>

        </Stack>
      </Container>


      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
            <Box className={"category-title"}>Our Family Brands</Box>
            <Stack className={"brand-list"}>
                <Box className={"review-box"}>
                    <img src={"/img/gurme.webp"} alt=""/>
                </Box>
                <Box className={"review-box"}>
                    <img src={"/img/seafood.webp"} alt=""/>
                </Box>
                <Box className={"review-box"}>
                    <img src={"/img/sweets.webp"} alt=""/>
                </Box>
                <Box className={"review-box"}>
                    <img src={"/img/doner.webp"} alt=""/>
                </Box>    
            </Stack>
        </Container>
      </div>
      <div className={"address"}>
        <Container>
            <Stack className={"address-area"}>
                <Box className={"title"}> Our address </Box>
                <iframe
                style={{ marginTop: "60px" }}
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d95937.90573034334!2d69.12329367702726!3d41.28580832212753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38ae8a31ca66d417%3A0x5755ff29b7bf33a!2s76P4%2B87P%2C%20100097%2C%20Tashkent%2C%20Uzbekistan!3m2!1d41.285837699999995!2d69.20569449999999!5e0!3m2!1sen!2skr!4v1728887853286!5m2!1sen!2skr"
                width="1320"
                height="500"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Stack>
        </Container>
      </div>
    </div>
)}
import React from 'react';
import FormContainer from "../components/FormContainer";
import {InputText} from "primereact/inputtext";


const ProductRegister = () => {
    return (
        <FormContainer title={"Create Product"}>
            {/*/!* eslint-disable-next-line react/jsx-no-undef *!/*/}
            {/*<Form className={"mt-5"} >*/}
            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <div className={"field col-12 md:col-4"}>*/}
            {/*            <label htmlFor={"inputtext"}>Name</label>*/}
            {/*            <InputText*/}
            {/*                id={"inputtext"}*/}
            {/*                value={name}*/}
            {/*                onChange={e => setName(e.target.value)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <div className="field col-12 md:col-3">*/}
            {/*            <label htmlFor="currency-us">Price</label>*/}
            {/*            /!* eslint-disable-next-line react/jsx-no-undef *!/*/}
            {/*            <InputNumber*/}
            {/*                inputId="currency-us"*/}
            {/*                value={price}*/}
            {/*                onValueChange={(e) => setPrice(e.value)}*/}
            {/*                mode="currency"*/}
            {/*                currency="USD"*/}
            {/*                locale="en-US"*/}

            {/*            />*/}
            {/*        </div>*/}
            {/*        {price*/}
            {/*            ? (*/}
            {/*                <Container>*/}
            {/*                    <h3>korea is {price * moneyInfo?.rates?.KRW.slice(0,5)}원</h3>*/}
            {/*                    <h3>Japan is {price * moneyInfo?.rates?.JPY.slice(0,5)}엔</h3>*/}
            {/*                </Container>*/}
            {/*            )*/}
            {/*            : null}*/}

            {/*    </div>*/}
            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <div className={"field col-12 md:col-4"}>*/}
            {/*            <label htmlFor={"inputtext"}>Brand</label>*/}
            {/*            <InputText*/}
            {/*                id={"inputtext"}*/}
            {/*                value={brand}*/}
            {/*                onChange={e => setBrand(e.target.value)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <div className={"field col-12 md:col-4"}>*/}
            {/*            <label htmlFor={"inputtext"}>Region</label>*/}
            {/*            <InputText*/}
            {/*                id={"inputtext"}*/}
            {/*                value={region}*/}
            {/*                onChange={e => setRegion(e.target.value)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <label>Description</label>*/}
            {/*        <InputTextarea value={desc1} onChange={(e) => setDesc1(e.target.value)} rows={5} cols={30} autoResize />*/}

            {/*    </div>*/}
            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <label>Select Categories</label>*/}
            {/*        <MultiSelect*/}
            {/*            value={categories}*/}
            {/*            onChange={(e) => setCategories(e.value)}*/}
            {/*            options={categoryList}*/}
            {/*            optionLabel="name"*/}
            {/*            placeholder="Select Categories"*/}
            {/*            display={"chip"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={"grid p-fluid mb-5"}>*/}
            {/*        <div className={"field col-12 md:col-4"}>*/}
            {/*            <label htmlFor={"inputtext"}>Picture</label>*/}
            {/*            <InputText*/}
            {/*                id={"inputtext"}*/}
            {/*                value={picture}*/}
            {/*                onChange={e => setPicture(e.target.value)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className={"grid p-fluid mb-3"}>*/}
            {/*        <div className={"field col-12 md:col-4"}>*/}
            {/*            <Button  label={"Posting"} icon={"pi pi-check"}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Form>*/}
        </FormContainer>
    );
};

export default ProductRegister;
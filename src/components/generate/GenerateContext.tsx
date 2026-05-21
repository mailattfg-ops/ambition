"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Gender = "Boy" | "Girl" | "Other" | null;
type FrameStyle = "wood" | "black" | "acrylic" | "canvas";
type OrderSize = "desk" | "wall" | "acrylic";
type SelectedProduct = "wall" | "table" | "frameless" | "acrylic";

interface GenerateContextType {
  uploadedImage: string | null;
  setUploadedImage: (val: string | null) => void;

  studentName: string;
  setStudentName: (val: string) => void;
  
  gender: Gender;
  setGender: (val: Gender) => void;
  
  schoolName: string;
  setSchoolName: (val: string) => void;
  
  whatsapp: string;
  setWhatsapp: (val: string) => void;

  searchQuery: string;
  setSearchQuery: (val: string) => void;

  selectedCategory: string | null;
  setSelectedCategory: (val: string | null) => void;

  selectedCareer: string | null;
  setSelectedCareer: (val: string | null) => void;

  selectedAttire: string | null;
  setSelectedAttire: (val: string | null) => void;

  selectedFrameStyle: FrameStyle;
  setSelectedFrameStyle: (val: FrameStyle) => void;

  orderSize: OrderSize;
  setOrderSize: (val: OrderSize) => void;

  orderQty: number;
  setOrderQty: (val: number) => void;

  deliveryName: string;
  setDeliveryName: (val: string) => void;

  deliveryAddress: string;
  setDeliveryAddress: (val: string) => void;

  deliveryPin: string;
  setDeliveryPin: (val: string) => void;

  deliveryPhone: string;
  setDeliveryPhone: (val: string) => void;

  isOrderPlaced: boolean;
  setIsOrderPlaced: (val: boolean) => void;

  isDownloading: boolean;
  setIsDownloading: (val: boolean) => void;

  selectedProduct: SelectedProduct;
  setSelectedProduct: (val: SelectedProduct) => void;
}

const GenerateContext = createContext<GenerateContextType | undefined>(undefined);

export function GenerateProvider({ children }: { children: ReactNode }) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // Step 2 details
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState<Gender>(null);
  const [schoolName, setSchoolName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Step 3 & 4 Selection
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>("science_medical");
  const [selectedCareer, setSelectedCareer] = useState<string | null>("lawyer");
  const [selectedAttire, setSelectedAttire] = useState<string | null>(null);

  // Step 6 Checkout & Fulfillment
  const [selectedFrameStyle, setSelectedFrameStyle] = useState<FrameStyle>("wood");
  const [orderSize, setOrderSize] = useState<OrderSize>("desk");
  const [orderQty, setOrderQty] = useState(1);
  
  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryPin, setDeliveryPin] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct>("frameless");

  const value = {
    uploadedImage, setUploadedImage,
    studentName, setStudentName,
    gender, setGender,
    schoolName, setSchoolName,
    whatsapp, setWhatsapp,
    searchQuery, setSearchQuery,
    selectedCategory, setSelectedCategory,
    selectedCareer, setSelectedCareer,
    selectedAttire, setSelectedAttire,
    selectedFrameStyle, setSelectedFrameStyle,
    orderSize, setOrderSize,
    orderQty, setOrderQty,
    deliveryName, setDeliveryName,
    deliveryAddress, setDeliveryAddress,
    deliveryPin, setDeliveryPin,
    deliveryPhone, setDeliveryPhone,
    isOrderPlaced, setIsOrderPlaced,
    isDownloading, setIsDownloading,
    selectedProduct, setSelectedProduct
  };

  return (
    <GenerateContext.Provider value={value}>
      {children}
    </GenerateContext.Provider>
  );
}

export function useGenerateContext() {
  const context = useContext(GenerateContext);
  if (context === undefined) {
    throw new Error("useGenerateContext must be used within a GenerateProvider");
  }
  return context;
}

import makeRequest, { endPoints } from './constants';

const createSalesOrder = ({
  serie,
  buyerCustomerParty,
  documentDate,
  discount,
  paymentMethod,
  deliveryTerm,
  salesChannel,
  company,
  remarks,
  unloadingPoint,
  unloadingStreetName,
  unloadingBuildingNumber,
  unloadingPostalZone,
  unloadingCityName,
  unloadingCountry,
  companyID,
  documentLines,
}) => makeRequest({
  method: 'POST',
  endPoint: endPoints.salesOrders,
  companyID,
  data: {
    documentType: 'ECL',
    serie,
    buyerCustomerParty,
    documentDate,
    discount,
    paymentMethod,
    deliveryTerm,
    salesChannel,
    company,
    remarks,
    unloadingPoint,
    unloadingStreetName,
    unloadingBuildingNumber,
    unloadingPostalZone,
    unloadingCityName,
    unloadingCountry,
    documentLines,
  },
});

export default createSalesOrder;

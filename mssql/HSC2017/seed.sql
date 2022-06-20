USE [HSC2017]
GO

INSERT INTO [dbo].[HSC_Inventory] (InventoryID, CntrID, HBL, MQuantity,MType,MVolume, MWeight, Status, DelStatus, BlockProcess)
VALUES (4, 309092, 'PHL/SIN/D17726',1, 'PLT/CTN', 1.43,823.50,'IN PROGRESS', 'N',0 );

SET IDENTITY_INSERT [dbo].[HSC_InventoryPallet] ON

INSERT INTO [dbo].[HSC_InventoryPallet]
       (InventoryPalletID, InventoryID, SequenceNo, ExpCntrID, Reserved, ReservedBy, ReservedDt, ClearedDate, DeliveryID, CreatedBy, CreatedDt, UpdatedBy, UpdatedDt, DelStatus, InterWhseFlag, CurrentLocation, InterWhseTo, Tag, Location, isActivityForStuffing)
VALUES
       ( 3000002, 2, NULL, NULL, NULL, NULL, NULL, NULL, 109, NULL, NULL, NULL, NULL, 'N', NULL, NULL, NULL, NULL, NULL, NULL);

SET IDENTITY_INSERT [dbo].[HSC_InventoryPallet] OFF


SET IDENTITY_INSERT [dbo].[HSC_InventoryBreakdown] ON

INSERT INTO [dbo].[HSC_InventoryBreakdown]
       (InventoryPalletID, BreakDownID, Markings, Quantity, Type, Length, Breadth, Height, Volume, Remarks, CreatedBy, CreatedDt, UpdatedBy, UpdatedDt, DelStatus, Flags, Tally, Weight)
VALUES
       ( 3000001, 3000001, NULL, NULL, NULL, NULL, NULL, 108 , NULL, NULL, NULL, NULL, 'N', NULL, NULL, NULL, NULL, NULL);

SET IDENTITY_INSERT [dbo].[HSC_InventoryBreakdown] OFF

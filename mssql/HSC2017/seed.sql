USE [HSC2017]
GO

INSERT INTO [dbo].[HSC_Inventory]
       ([CntrID]
       ,[SequenceNo]
       ,[SequencePrefix]
       ,[HBL]
       ,[MQuantity]
       ,[MType]
       ,[MVolume]
       ,[MWeight]
       ,[Status]
       ,[OwnTransport]
       ,[TranshipmentRef]
       ,[Note]
       ,[Amount]
       ,[CargoRef]
       ,[Consignee]
       ,[CreatedBy]
       ,[CreatedDt]
       ,[UpdatedBy]
       ,[UpdatedDt]
       ,[DelStatus]
       ,[POD]
       ,[StorageDate]
       ,[Shipper]
       ,[CargoDescription]
       ,[LockedBy]
       ,[LockedDt]
       ,[LockedPC]
       ,[ToDGWhse]
       ,[PIC]
       ,[OwnTransportName]
       ,[ExportBookingStatus]
       ,[ExpBookSeq]
       ,[CustFileRef]
       ,[CustInventoryRef]
       ,[Mode]
       ,[Agent]
       ,[CheckStatus]
       ,[TransporterID]
       ,[CheckStatusStuffing]
       ,[BlockProcess])
VALUES
       (0, NULL, NULL, 'SUBA05587', NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
       (0, NULL, NULL, 'SUBA05626', NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
       (0, NULL, NULL, 'SUBA05627', NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
              NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0)
GO


SET IDENTITY_INSERT [dbo].[HSC_InventoryPallet] ON

INSERT INTO [dbo].[HSC_InventoryPallet]
       (InventoryPalletID, InventoryID, SequenceNo, ExpCntrID, Reserved, ReservedBy, ReservedDt, ClearedDate, DeliveryID, CreatedBy, CreatedDt, UpdatedBy, UpdatedDt, DelStatus, InterWhseFlag, CurrentLocation, InterWhseTo, Tag, Location, isActivityForStuffing)
VALUES
       ( 3000002, 2, NULL, NULL, NULL, NULL, NULL, NULL, 108, NULL, NULL, NULL, NULL, 'N', NULL, NULL, NULL, NULL, NULL, NULL);

SET IDENTITY_INSERT [dbo].[HSC_InventoryPallet] OFF


SET IDENTITY_INSERT [dbo].[HSC_InventoryBreakdown] ON

INSERT INTO [dbo].[HSC_InventoryBreakdown]
       (InventoryPalletID, BreakDownID, Markings, Quantity, Type, Length, Breadth, Height, Volume, Remarks, CreatedBy, CreatedDt, UpdatedBy, UpdatedDt, DelStatus, Flags, Tally, Weight)
VALUES
       ( 3000001, 3000001, NULL, NULL, NULL, NULL, NULL, 108 , NULL, NULL, NULL, NULL, 'N', NULL, NULL, NULL, NULL, NULL);

SET IDENTITY_INSERT [dbo].[HSC_InventoryBreakdown] OFF

USE [HSC2012]
GO

-- DELETE FROM [dbo].[VesselInfo]
-- DELETE FROM [dbo].[JobInfo]
-- DELETE FROM [dbo].[ContainerInfo]
-- DELETE FROM [dbo].[Place of Delivery]

INSERT INTO [dbo].[Place of Delivery] ([DeliveryID]) VALUES ('hsc')
GO

INSERT INTO [dbo].[VesselInfo]
    ([VesselName],[InVoy],[OutVoy],[ETA],[COD],[Berth],[ETD],[ServiceRoute],[VesselFullName],[ShippingLine])
VALUES
    ('seedVessel', NULL, NULL,'2023-08-13 16:30:00.000', NULL, NULL, NULL, NULL, 'seedingFirstVessel', NULL)
GO

INSERT INTO [dbo].[JobInfo]
    ([JobNumber],[InvoiceNumber],[InvoiceDate],[ClientID],[ClientRef],[PIC],[VesselID],[PortCode],[POD],[Import/Export],
    [TruckTo],[DateJobRaised],[TranshipmentRef],[Consignee],[Enclosure],[PersonHold],[DatePend],[DateSend],[Remarks],[BillingParty],
    [CreatedBy],[ModifiedBy],[CreatedDt],[ModifiedDt],[JobType],[InvRevise],[InvCash],[CntrRequiredDate],[CntrStuffingDate])
VALUES
    (1, NULL, NULL, 0, NULL, NULL, 132045, NULL, NULL, 'Import',
        'hsc', '4/17/2022 23:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
GO

INSERT INTO [dbo].[ContainerInfo]
    ([JobNumber],[ContainerPrefix],[ContainerNumber],[SealNumber],[ContainerSize],[ContainerType],[Tri-Axle],[Direct],[BkRef],[OpCode],
    [Yard],[Status],[DateofStuf/Unstuf],[LastDay],[Remarks],[RemarksWhse],[TT],[EstWt],[Wt],[EmptyDate],[DCON],
    [Floorboard],[TallyBy],[DO],[EIR],[PSABillNumber],[PSABillDate],[Ref],[DCONLink],[DeliverTo],[ESN],[SendCntrNo],
    [Permit],[Class],[OBL],[F5],[TotalVolume],[F5UnstuffDate],[F5LastDay],[J5Slot],[YardRemarks],[StickerNo],[DamageAmt],
    [DamageAmtAbsorb],[Bay],[Stevedore],[SevenPoints],[StartTime],[EndTime],[IsOK],[Agent],[ShutOut],[NTUnstuffingStatus],[ReExport],
    [J5Seal],[TallySheetDateSend])
VALUES
    (1, 'CAAU', '1234567', NULL, NULL, NULL, 0, 0, NULL, NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL,
        NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL,
        NULL, NULL, 0, NULL, NULL , NULL , NULL , NULL , NULL , NULL , NULL ,
        NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL ),
    (1, 'CAAU', '2345678', NULL, NULL, NULL, 0, 0, NULL, NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL,
        NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL,
        NULL, NULL, 0, NULL, NULL , NULL , NULL , NULL , NULL , NULL , NULL ,
        NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL , NULL )
GO

-- SELECT * FROM [dbo].[Place of Delivery];
-- SELECT * FROM [dbo].[VesselInfo];
-- SELECT * FROM [dbo].[ContainerInfo];
-- SELECT * FROM [dbo].[JobInfo];
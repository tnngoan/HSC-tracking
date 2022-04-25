-- INCOMPLETE-
-- DROP DATABASE IF EXISTS [HSC2012]
GO

USE [HSC2012]
GO
/****** Object:  Table [dbo].[VesselInfo]    Script Date: 04/19/2022 17:41:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[VesselInfo](
	[VesselID] [int] IDENTITY(132000,1) NOT NULL,
	[VesselName] [varchar](50) NOT NULL,
	[InVoy] [varchar](6) NULL,
	[OutVoy] [varchar](6) NULL,
	[ETA] [datetime] NULL,
	[COD] [datetime] NULL,
	[Berth] [varchar](4) NULL,
	[ETD] [datetime] NULL,
	[ServiceRoute] [varchar](50) NULL,
	[VesselFullName] [varchar](100) NOT NULL,
	[ShippingLine] [varchar](3) NULL,
 CONSTRAINT [PK_VesselInfo] PRIMARY KEY CLUSTERED 
(
	[VesselID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[JobInfo]    Script Date: 04/19/2022 17:41:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[JobInfo](
	[JobNumber] [int] NOT NULL,
	[InvoiceNumber] [int] NULL,
	[InvoiceDate] [smalldatetime] NULL,
	[ClientID] [varchar](12) NOT NULL,
	[ClientRef] [varchar](50) NULL,
	[PIC] [varchar](20) NULL,
	[VesselID] [int] NOT NULL,
	[PortCode] [varchar](5) NULL,
	[POD] [varchar](50) NULL,
	[Import/Export] [varchar](6) NULL,
	[TruckTo] [varchar](20) NULL,
	[DateJobRaised] [datetime] NOT NULL,
	[TranshipmentRef] [int] NULL,
	[Consignee] [varchar](50) NULL,
	[Enclosure] [varchar](255) NULL,
	[PersonHold] [varchar](50) NULL,
	[DatePend] [smalldatetime] NULL,
	[DateSend] [smalldatetime] NULL,
	[Remarks] [varchar](255) NULL,
	[BillingParty] [varchar](8) NULL,
	[CreatedBy] [varchar](50) NULL,
	[ModifiedBy] [nvarchar](50) NULL,
	[CreatedDt] [datetime] NULL,
	[ModifiedDt] [datetime] NULL,
	[JobType] [varchar](50) NULL,
	[InvRevise] [varchar](1) NULL,
	[InvCash] [varchar](1) NULL,
	[CntrRequiredDate] [datetime] NULL,
	[CntrStuffingDate] [datetime] NULL,
 CONSTRAINT [PK_JobInfo] PRIMARY KEY CLUSTERED 
(
	[JobNumber] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Place of Delivery]    Script Date: 04/20/2022 17:29:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Place of Delivery](
	[DeliveryID] [varchar](20) NOT NULL,
	[CompanyName] [varchar](50) NULL,
	[Address] [varchar](50) NULL,
	[Address3] [varchar](50) NULL,
	[Address4] [varchar](50) NULL,
	[Habit] [varchar](50) NULL,
	[PTC] [varchar](50) NULL,
 CONSTRAINT [PK_Place of Delivery] PRIMARY KEY CLUSTERED 
(
	[DeliveryID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ContainerInfo]    Script Date: 04/19/2022 17:41:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ContainerInfo] (
	[Dummy] [int] IDENTITY(309000,1) NOT NULL,
	[JobNumber] [int] NOT NULL,
	[ContainerPrefix] [varchar](6) NULL,
	[ContainerNumber] [varchar](10) NULL,
	[SealNumber] [varchar](20) NULL,
	[ContainerSize] [tinyint] NULL,
	[ContainerType] [varchar](10) NULL,
	[Tri-Axle] [bit] NOT NULL,
	[Direct] [bit] NOT NULL,
	[BkRef] [varchar](50) NULL,
	[OpCode] [varchar](2) NULL,
	[Yard] [varchar](50) NULL,
	[Status] [varchar](50) NULL,
	[DateofStuf/Unstuf] [datetime] NULL,
	[LastDay] [datetime] NULL,
	[Remarks] [varchar](255) NULL,
	[RemarksWhse] [varchar](100) NULL,
	[TT] [varchar](50) NULL,
	[EstWt] [int] NULL,
	[Wt] [bit] NOT NULL,
	[EmptyDate] [datetime] NULL,
	[DCON] [bit] NOT NULL,
	[Floorboard] [varchar](255) NULL,
	[TallyBy] [varchar](50) NULL,
	[DO] [bit] NOT NULL,
	[EIR] [bit] NOT NULL,
	[PSABillNumber] [varchar](6) NULL,
	[PSABillDate] [smalldatetime] NULL,
	[Ref] [varchar](20) NULL,
	[DCONLink] [varchar](50) NULL,
	[DeliverTo] [varchar](10) NULL,
	[ESN] [bit] NOT NULL,
	[SendCntrNo] [bit] NOT NULL,
	[Permit] [varchar](50) NULL,
	[Class] [varchar](50) NULL,
	[OBL] [varchar](20) NULL,
	[F5] [bit] NOT NULL,
	[TotalVolume] [float] NULL,
	[F5UnstuffDate] [datetime] NULL,
	[F5LastDay] [datetime] NULL,
	[J5Slot] [datetime] NULL,
	[YardRemarks] [varchar](50) NULL,
	[StickerNo] [int] NULL,
	[DamageAmt] [money] NULL,
	[DamageAmtAbsorb] [money] NULL,
	[Bay] [varchar](20) NULL,
	[Stevedore] [varchar](50) NULL,
	[SevenPoints] [varchar](300) NULL,
	[StartTime] [datetime] NULL,
	[EndTime] [datetime] NULL,
	[IsOK] [bit] NULL,
	[Agent] [nvarchar](255) NULL,
	[ShutOut] [varchar](255) NULL,
	[NTUnstuffingStatus] [varchar](50) NULL,
	[ReExport] [bit] NULL,
	[J5Seal] [varchar](20) NULL,
	[TallySheetDateSend] [datetime] NULL,
 CONSTRAINT [PK_ContainerInfo] PRIMARY KEY CLUSTERED 
(
	[Dummy] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Default [DF_ContainerInfo_Tri-Axle]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_Tri-Axle]  DEFAULT ((0)) FOR [Tri-Axle]
GO
/****** Object:  Default [DF_ContainerInfo_Direct]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_Direct]  DEFAULT ((0)) FOR [Direct]
GO
/****** Object:  Default [DF_ContainerInfo_Wt]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_Wt]  DEFAULT ((0)) FOR [Wt]
GO
/****** Object:  Default [DF_ContainerInfo_DCON]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_DCON]  DEFAULT ((0)) FOR [DCON]
GO
/****** Object:  Default [DF_ContainerInfo_DO]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_DO]  DEFAULT ((0)) FOR [DO]
GO
/****** Object:  Default [DF_ContainerInfo_EIR]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_EIR]  DEFAULT ((0)) FOR [EIR]
GO
/****** Object:  Default [DF_ContainerInfo_ESN]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_ESN]  DEFAULT ((0)) FOR [ESN]
GO
/****** Object:  Default [DF_ContainerInfo_SendCntrNo]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_SendCntrNo]  DEFAULT ((0)) FOR [SendCntrNo]
GO
/****** Object:  Default [DF__Container__Permi__02F25272]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  DEFAULT (NULL) FOR [Permit]
GO
/****** Object:  Default [DF__ContainerInf__F5__5F1F0650]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  DEFAULT ((0)) FOR [F5]
GO
/****** Object:  Default [DF__Container__J5Slo__53433F50]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  DEFAULT (NULL) FOR [J5Slot]
GO
/****** Object:  Default [DF__Container__Damag__7EECB764]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  DEFAULT ((0)) FOR [DamageAmt]
GO
/****** Object:  Default [DF_ContainerInfo_NTUnstuffingStatus]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_NTUnstuffingStatus]  DEFAULT ('EMPTY') FOR [NTUnstuffingStatus]
GO
/****** Object:  Default [DF_ContainerInfo_ReExport]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo] ADD  CONSTRAINT [DF_ContainerInfo_ReExport]  DEFAULT ((0)) FOR [ReExport]
GO
/****** Object:  Default [DF_JobInfo_DateJobRaised]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[JobInfo] ADD  CONSTRAINT [DF_JobInfo_DateJobRaised]  DEFAULT (getdate()) FOR [DateJobRaised]
GO
/****** Object:  Default [DF__VesselInf__Vesse__6423B28F]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[VesselInfo] ADD  DEFAULT ('') FOR [VesselFullName]
GO
/****** Object:  ForeignKey [FK_ContainerInfo_JobInfo]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[ContainerInfo]  WITH CHECK ADD  CONSTRAINT [FK_ContainerInfo_JobInfo] FOREIGN KEY([JobNumber])
REFERENCES [dbo].[JobInfo] ([JobNumber])
GO
ALTER TABLE [dbo].[ContainerInfo] CHECK CONSTRAINT [FK_ContainerInfo_JobInfo]
GO
/****** Object:  ForeignKey [FK_JobInfo_ClientInfo]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[JobInfo]  WITH CHECK ADD  CONSTRAINT [FK_JobInfo_ClientInfo] FOREIGN KEY([ClientID])
REFERENCES [dbo].[ClientInfo] ([ClientID])
GO
ALTER TABLE [dbo].[JobInfo] CHECK CONSTRAINT [FK_JobInfo_ClientInfo]
GO
/****** Object:  ForeignKey [FK_JobInfo_Place of Delivery]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[JobInfo]  WITH CHECK ADD  CONSTRAINT [FK_JobInfo_Place of Delivery] FOREIGN KEY([TruckTo])
REFERENCES [dbo].[Place of Delivery] ([DeliveryID])
GO
ALTER TABLE [dbo].[JobInfo] CHECK CONSTRAINT [FK_JobInfo_Place of Delivery]
GO
/****** Object:  ForeignKey [FK_JobInfo_VesselInfo]    Script Date: 04/19/2022 17:41:10 ******/
ALTER TABLE [dbo].[JobInfo]  WITH CHECK ADD  CONSTRAINT [FK_JobInfo_VesselInfo] FOREIGN KEY([VesselID])
REFERENCES [dbo].[VesselInfo] ([VesselID])
GO
ALTER TABLE [dbo].[JobInfo] CHECK CONSTRAINT [FK_JobInfo_VesselInfo]
GO

-- QUERY
CREATE PROCEDURE HSCGetStuffStsByCntrIDOrHBL @inputContainerNumber nvarchar(10)
AS
  SELECT
    CI.ContainerPrefix,
    CI.ContainerNumber,
    VI.ETA,
    CI.[DateofStuf/Unstuf],
    CI.LastDay,
    CI.DeliverTo Location,
    VI.COD,
    CI.F5UnstuffDate,
    CI.F5LastDay,
    CASE
      WHEN CI.[DateofStuf/Unstuf] IS NULL THEN VI.ETA + 4
      ELSE NULL
    END ScheduleDate
  FROM HSC2012.dbo.VesselInfo VI
  INNER JOIN HSC2012.dbo.JobInfo JI
    ON VI.VesselID = JI.VesselID
  INNER JOIN hsc2012.dbo.ContainerInfo CI
    ON JI.JobNumber = CI.JobNumber
  WHERE JI.[Import/Export] = 'Import'
  AND CI.Status <> 'CANCELLED'
  AND (CI.[DateofStuf/Unstuf] IS NULL
  OR (CI.[DateofStuf/Unstuf] > GETDATE() - 7))
  AND YEAR(VI.ETA) >= 2020
  AND JI.TruckTo IN ('hsc', '108', '109', '110', '111', '112')
  AND CI.ContainerNumber = @inputContainerNumber
  GROUP BY CI.ContainerPrefix,
           CI.ContainerNumber,
           CI.[DateofStuf/Unstuf],
           CI.LastDay,
           CI.F5UnstuffDate,
           CI.F5LastDay,
           VI.ETA,
           VI.COD,
           CI.DeliverTo
GO
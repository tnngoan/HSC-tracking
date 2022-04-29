create database [HSC2017]
GO
USE [HSC2017]
GO
/****** Object:  Table [dbo].[HSC_Inventory]    Script Date: 04/26/2022 17:42:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[HSC_Inventory](
	[InventoryID] [int] IDENTITY(1,1) NOT NULL,
	[CntrID] [int] NOT NULL,
	[SequenceNo] [int] NULL,
	[SequencePrefix] [varchar](2) NULL,
	[HBL] [varchar](50) NULL,
	[MQuantity] [int] NULL,
	[MType] [varchar](50) NULL,
	[MVolume] [float] NULL,
	[MWeight] [float] NULL,
	[Status] [varchar](50) NULL,
	[OwnTransport] [bit] NULL,
	[TranshipmentRef] [varchar](50) NULL,
	[Note] [varchar](255) NULL,
	[Amount] [money] NULL,
	[CargoRef] [varchar](50) NULL,
	[Consignee] [varchar](100) NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDt] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDt] [datetime] NULL,
	[DelStatus] [varchar](1) NULL,
	[POD] [varchar](50) NULL,
	[StorageDate] [datetime] NULL,
	[Shipper] [varchar](255) NULL,
	[CargoDescription] [varchar](max) NULL,
	[LockedBy] [nvarchar](50) NULL,
	[LockedDt] [datetime] NULL,
	[LockedPC] [nvarchar](50) NULL,
	[ToDGWhse] [bit] NULL,
	[PIC] [varchar](20) NULL,
	[OwnTransportName] [nvarchar](250) NULL,
	[ExportBookingStatus] [nvarchar](50) NULL,
	[ExpBookSeq] [int] NULL,
	[CustFileRef] [nvarchar](50) NULL,
	[CustInventoryRef] [nvarchar](50) NULL,
	[Mode] [nvarchar](255) NULL,
	[Agent] [nvarchar](255) NULL,
	[CheckStatus] [char](1) NULL,
	[TransporterID] [int] NULL,
	[CheckStatusStuffing] [char](1) NULL,
	[BlockProcess] [bit] NOT NULL,
 CONSTRAINT [PK_HSC_Inventory] PRIMARY KEY CLUSTERED 
(
	[InventoryID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Default [DF_HSC_Inventory_CntrID]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_CntrID]  DEFAULT ((0)) FOR [CntrID]
GO
/****** Object:  Default [DF_HSC_Inventory_SequenceNo]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_SequenceNo]  DEFAULT ((0)) FOR [SequenceNo]
GO
/****** Object:  Default [DF_HSC_Inventory_MQuantity]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_MQuantity]  DEFAULT ((0)) FOR [MQuantity]
GO
/****** Object:  Default [DF_HSC_Inventory_MVolume]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_MVolume]  DEFAULT ((0)) FOR [MVolume]
GO
/****** Object:  Default [DF_HSC_Inventory_MWeight]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_MWeight]  DEFAULT ((0)) FOR [MWeight]
GO
/****** Object:  Default [DF_HSC_Inventory_OwnTransport]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_OwnTransport]  DEFAULT ((0)) FOR [OwnTransport]
GO
/****** Object:  Default [DF_HSC_Inventory_Amount]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_Amount]  DEFAULT ((0)) FOR [Amount]
GO
/****** Object:  Default [DF__HSC_Inven__DelSt__1FE396DB]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF__HSC_Inven__DelSt__1FE396DB]  DEFAULT ('N') FOR [DelStatus]
GO
/****** Object:  Default [DF_HSC_Inventory_CheckStatus]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  CONSTRAINT [DF_HSC_Inventory_CheckStatus]  DEFAULT ('N') FOR [CheckStatus]
GO
/****** Object:  Default [DF__HSC_Inven__Check__104C4D90]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  DEFAULT ('N') FOR [CheckStatusStuffing]
GO
/****** Object:  Default [DF__HSC_Inven__Block__3E131840]    Script Date: 04/26/2022 17:42:02 ******/
ALTER TABLE [dbo].[HSC_Inventory] ADD  DEFAULT ((0)) FOR [BlockProcess]
GO

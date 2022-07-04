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
CREATE TABLE [dbo].[VesselInfo]
(
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
CREATE TABLE [dbo].[JobInfo]
(
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
CREATE TABLE [dbo].[Place of Delivery]
(
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
CREATE TABLE [dbo].[ContainerInfo]
(
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


/** Object:  Table [dbo].[HSC_AlertContact]    Script Date: 06/21/2022 12:50:21 **/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[HSC_AlertContact](
	[ContactType] [char](1) NOT NULL,
	[ContactNo] [varchar](60) NOT NULL,
	[ContainerNo] [char](7) NOT NULL,
	[HBLNo] [varchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NULL,
	[Closed] [bit] NOT NULL,
 CONSTRAINT [PK_HSC_AlertContact] PRIMARY KEY CLUSTERED 
(
	[ContactType] ASC,
	[ContactNo] ASC,
	[ContainerNo] ASC,
	[HBLNo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[HSC_AlertContact] ADD  DEFAULT ('') FOR [HBLNo]
GO

ALTER TABLE [dbo].[HSC_AlertContact] ADD  DEFAULT (getdate()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[HSC_AlertContact] ADD  DEFAULT ((0)) FOR [Closed]
GO

-- QUERY
ALTER PROCEDURE [dbo].[HSCGetStuffStsByCntrIDOrHBL]
	@inputContainerNumber varchar(7),
	@inputHBL varchar(50)
AS
Begin
	if isnull(@inputContainerNumber, '') <> ''
		begin
		Select CI.ContainerPrefix, CI.ContainerNumber, VI.ETA, CI.[DateofStuf/Unstuf], CI.LastDay, CI.DeliverTo Location, VI.COD, CI.F5UnstuffDate, CI.F5LastDay, CASE WHEN CI.[DateofStuf/Unstuf] IS NULL THEN VI.ETA + 4 ELSE NULL END ScheduleDate
		FROM HSC2012.dbo.VesselInfo VI INNER JOIN
			HSC2012.dbo.JobInfo JI ON VI.VesselID = JI.VesselID INNER JOIN
			hsc2012.dbo.ContainerInfo CI ON JI.JobNumber = CI.JobNumber
		WHERE JI.[Import/Export] = 'Import'
			AND CI.Status <> 'CANCELLED'
			AND (CI.[DateofStuf/Unstuf] IS NULL OR (CI.[DateofStuf/Unstuf] > GETDATE() - 7))
			AND YEAR(VI.ETA) >= 2020
			AND JI.TruckTo IN ('hsc','108','109','110','111','112')
			AND CI.ContainerNumber = @inputContainerNumber
		GROUP BY CI.ContainerPrefix, CI.ContainerNumber, CI.[DateofStuf/Unstuf], CI.LastDay, CI.F5UnstuffDate, CI.F5LastDay, VI.ETA, VI.COD, CI.DeliverTo
	end
	else
		begin
		DECLARE @CltID varchar(12)
		DECLARE @Rgn nvarchar(50)
		DECLARE @Ctry nvarchar(50)
		DECLARE @Prt nvarchar(50)
		DECLARE @ETA datetime
		DECLARE @Dmy int
		DECLARE @WhsChgsID int
		DECLARE @TtlAmt money
		DECLARE @Dt datetime
		DECLARE @MVol float
		DECLARE @MWgt float
		DECLARE @HBL varchar(50)
		DECLARE @InvSts varchar(50)
		DECLARE @ChgsCode varchar(10)
		DECLARE @Desc varchar(50)
		DECLARE @Amount money
		DECLARE @U nvarchar(50)
		DECLARE @Wv bit
		DECLARE @Disc bit
		DECLARE @Typ varchar(15)
		DECLARE @RbAmt money
		DECLARE @RbFm varchar(250)
		DECLARE @RbAmt1 money
		DECLARE @RbFm1 varchar(250)
		DECLARE @ID int
		DECLARE @Qty float
		DECLARE @RdUpRt bit
		DECLARE @NMVol float
		DECLARE @NMWgt float

		declare @WhsChgs table (
			ID int,
			Client nvarchar(50),
			Consignee nvarchar(50),
			SpecialCase nvarchar(50),
			Region nvarchar(50),
			Country nvarchar(50),
			Port nvarchar(50),
			EffectiveDate datetime,
			EffectiveEta datetime,
			EffectiveDateType nvarchar(50),
			RoundUpRT bit,
			LocalFreeStoragePeriod int,
			LocalFreeStorageType nvarchar(50),
			LocalSR money,
			LocalRF money,
			TransFreeStoragePeriod int,
			TransFreeStorageType nvarchar(50),
			TransSR money,
			TransRF money,
			DGSR money,
			DGRF money,
			OwnTptUnitFL nvarchar(50),
			OwnTptFL money,
			OwnTptMinFL money,
			OT money,
			CreatedDt datetime,
			CreatedBy nvarchar(50),
			ModifiedDt datetime,
			ModifiedBy nvarchar(50),
			MgmtFlag bit
			)

		declare @WhsChgsStdRt table (
			ChargesCode varchar(10),
			Description varchar(50),
			Amount money,
			Unit nvarchar(50),
			Waivable bit,
			Discountable bit,
			Type varchar(15),
			RebateAmount money,
			RebateFormula varchar(250),
			RebateAmount1 money,
			RebateFormula1 varchar(250),
			ID int
			);

		declare @CntrChgs table (
			CntrID int,
			HBL varchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS,
			TotalAmount money
			);

		DECLARE cGetImpCntr CURSOR LOCAL FOR
			SELECT JI.ClientID, PL.Region, PL.Country, PL.Port, VI.ETA, CI.Dummy, I.HBL, I.Status, SUM(I.MVolume) MVol, SUM(I.MWeight) MWt
		FROM HSC2012.dbo.VesselInfo VI inner join
			HSC2012.dbo.JobInfo JI on Ji.VesselID = Vi.VesselID inner join
			hsc2012.dbo.ContainerInfo CI on CI.JobNumber = Ji.JobNumber inner join
			HSC2017.dbo.HSC_Inventory I on I.CntrID = CI.Dummy inner join
			hsc2012.dbo.PortLookup PL on PL.Port = Ji.POD
		WHERE JI.[Import/Export] = 'Import'
			AND CI.Status <> 'CANCELLED'
			AND I.DelStatus = 'N'
			AND I.HBL = @inputHBL
		GROUP BY JI.ClientID, PL.Region, PL.Country, PL.Port, VI.ETA, CI.Dummy, I.HBL, I.Status

		OPEN cGetImpCntr
		WHILE(1=1)
				BEGIN
			FETCH NEXT FROM cGetImpCntr INTO @CltID, @Rgn, @Ctry, @Prt, @ETA, @Dmy, @HBL, @InvSts, @MVol, @MWgt

			IF @@FETCH_STATUS <> 0
						BREAK

			IF @CltID IN ('A.HARTRO','CLS_AHAR','ECU','KWE') AND (ISNULL(@InvSts, 'LOCAL') = 'LOCAL' OR @InvSts = '')
						BEGIN
				SET @Dt = GETDATE()

				INSERT INTO @WhsChgs
				EXEC HSC2017.dbo.Charges_GetWhseCharges @CltID, '', '', @Rgn, @Ctry, @Prt, @Dt, @ETA;

				SELECT @WhsChgsID = ID, @RdUpRt = RoundUpRT
				FROM @WhsChgs;

				delete from @WhsChgs;

				INSERT INTO @WhsChgsStdRt
				EXEC HSC2017.dbo.Charges_GetDefaultCharges @WhsChgsID;

				DECLARE cGetStdRt CURSOR LOCAL FOR
							SELECT *
				FROM @WhsChgsStdRt

				OPEN cGetStdRt
				WHILE(1=1)
								BEGIN
					FETCH NEXT FROM cGetStdRt INTO @ChgsCode, @Desc, @Amount, @U, @Wv, @Disc, @Typ, @RbAmt, @RbFm, @RbAmt1, @RbFm1, @ID

					IF @@FETCH_STATUS <> 0
										BREAK

					IF @RdUpRt = 1
										BEGIN
						SET @NMWgt = CEILING(@MWgt / 1000.0)
						SET @NMVol = CEILING(@MVol)
					END
									ELSE
										BEGIN
						SET @NMWgt = @MWgt / 1000.0
						SET @NMVol = @MVol
					END

					IF @U = 'b4rt'
										SET @Qty = CASE WHEN @NMWgt > @NMVol THEN CEILING(@NMWgt / 4.0) ELSE CEILING(@NMVol / 4.0) END
									ELSE IF @U = 'b3rt'
										SET @Qty = CASE WHEN @NMWgt > @NMVol THEN CEILING(@NMWgt / 3.0) ELSE CEILING(@NMVol / 3.0) END
									ELSE IF @U = 'b2rt'
										SET @Qty = CASE WHEN @NMWgt > @NMVol THEN CEILING(@NMWgt / 2.0) ELSE CEILING(@NMVol / 2.0) END
									ELSE IF @U = 'rt'
										BEGIN
						IF @NMVol = 0
												SET @Qty = 0
											ELSE
												SET @Qty = CASE WHEN @NMWgt > @NMVol THEN CASE WHEN @NMWgt < 1 THEN 1 ELSE @NMWgt END ELSE CASE WHEN @NMVol < 1 THEN 1 ELSE @NMVol END END
					END
									ELSE IF @U = 'set'
										SET @Qty = 1

					UPDATE @WhsChgsStdRt
									SET Amount = @Qty * @Amount
									WHERE ChargesCode = @ChgsCode
				END
				CLOSE cGetStdRt;
				DEALLOCATE cGetStdRt;

				SELECT @TtlAmt = ISNULL(SUM(Amount), 0)
				FROM @WhsChgsStdRt;

				Delete from @WhsChgsStdRt;

				INSERT INTO @CntrChgs
					(CntrID, HBL, TotalAmount)
				VALUES(@Dmy, @HBL, @TtlAmt)
			END
		END
		CLOSE cGetImpCntr;
		DEALLOCATE cGetImpCntr;

		SELECT CI.ContainerPrefix, CI.ContainerNumber, CI.LastDay, I.HBL, MAX(I.MWeight) [Weight], CASE WHEN SUM(ISNULL(IB.Volume,0)) > 0 THEN SUM(ISNULL(IB.Volume,0)) ELSE MAX(I.MVolume) END Volume, SUM(IB.Quantity) Quantity, IB.Markings, IB.Type, IB.Length, IB.Breadth, IB.Height, (ISNULL(IB.Flags, '')) Remarks, I.Status InvStatus, JI.ClientID, isnull(MAX(CC.TotalAmount), 0) TotalAmount
		FROM HSC2012.dbo.VesselInfo VI INNER JOIN
			HSC2012.dbo.JobInfo JI ON VI.VesselID = JI.VesselID INNER JOIN
			hsc2012.dbo.ContainerInfo CI ON JI.JobNumber = CI.JobNumber INNER JOIN
			HSC2017.dbo.HSC_Inventory I ON CI.Dummy = I.CntrID INNER JOIN
			hsc2017.dbo.HSC_InventoryPallet IP ON I.InventoryID = IP.InventoryID INNER JOIN
			hsc2017.dbo.HSC_InventoryBreakdown IB ON IP.InventoryPalletID = IB.InventoryPalletID LEFT JOIN
			@CntrChgs CC ON CI.Dummy = CC.CntrID AND I.HBL = CC.HBL
		WHERE JI.[Import/Export] = 'Import'
			AND CI.Status <> 'CANCELLED'
			AND I.DelStatus = 'N'
			AND IP.DelStatus = 'N'
			AND IB.DelStatus = 'N'
			AND (CI.[DateofStuf/Unstuf] IS NULL OR (CI.[DateofStuf/Unstuf] > GETDATE() - 7))
			AND YEAR(VI.ETA) >= 2020
			AND JI.TruckTo IN ('hsc','108','109','110','111','112')
			AND I.HBL = @inputHBL
		GROUP BY JI.ClientID, CI.ContainerPrefix, CI.ContainerNumber, I.Status, CI.LastDay, I.HBL, IB.Markings, IB.Type, IB.Length, IB.Breadth, IB.Height, IB.Flags
		ORDER BY I.HBL
	end
end
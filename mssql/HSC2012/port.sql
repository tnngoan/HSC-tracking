USE [HSC2012]
GO
/****** Object:  Table [dbo].[PortLookup]    Script Date: 04/26/2022 17:41:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PortLookup](
	[Region] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
	[Port] [nvarchar](50) NOT NULL,
	[PortCode] [varchar](5) NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDt] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDt] [datetime] NULL,
	[AMS] [bit] NULL,
 CONSTRAINT [PK_PortLookup] PRIMARY KEY CLUSTERED 
(
	[Port] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO

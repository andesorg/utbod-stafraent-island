locals {
  env        = "staging"
  aws_region = "eu-west-1"
  common_tags = tomap({
    "Owner"         = "DevOps",
    "Business Unit" = "IT",
    "Customer"      = "General",
    "terraform"     = "true",
    "state"         = "networking"
  })
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "staging-utbod-stafraent-island-terraform-state"
    region  = "eu-west-1"
    key     = "networking/terraform.tfstate"
  }
}

terraform {
  required_version = ">= 0.15.5"
}

provider "aws" {
  region = local.aws_region
  default_tags {
    tags = local.common_tags
  }
}

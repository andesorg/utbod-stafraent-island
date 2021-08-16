resource "aws_ecs_cluster" "cluster" {
  name = var.name

  capacity_providers = ["FARGATE_SPOT", "FARGATE"]

  dynamic "default_capacity_provider_strategy" {
    for_each = var.default_capacity_provider_strategy
    iterator = each
    content {
      capacity_provider = each.value["capacity_provider"]
      weight            = each.value["weight"]
    }
  }

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_service_discovery_private_dns_namespace" "services" {
  name        = "services.${var.env}.internal"
  description = "ECS services"
  vpc         = var.vpc_id
}
